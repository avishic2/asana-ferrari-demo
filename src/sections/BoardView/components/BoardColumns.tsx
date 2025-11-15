import { Plus, GripVertical, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/context/AppContext';
import { useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '@/types';

interface SortableTaskProps {
  task: Task;
  onDelete: () => void;
}

const SortableTask = ({ task, onDelete }: SortableTaskProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-[#181818] border border-[#404040] rounded-lg p-4 cursor-pointer transition-all hover:border-[#DC0000] hover:shadow-[0_2px_8px_rgba(220,0,0,0.15)] group"
    >
      <div className="flex items-start gap-2">
        <div className="w-4 h-4 border-2 border-[#404040] rounded flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm leading-relaxed mb-3 break-words">
            {task.title}
          </p>
          {task.description && (
            <p className="text-[#737373] text-xs mb-3 break-words">
              {task.description}
            </p>
          )}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#404040] flex items-center justify-center text-[#737373]">
              <Plus size={12} />
            </div>
          </div>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            {...attributes}
            {...listeners}
            className="p-1 hover:bg-[#404040] rounded cursor-grab active:cursor-grabbing"
          >
            <GripVertical size={16} className="text-[#737373]" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-1 hover:bg-[#404040] rounded"
          >
            <Trash2 size={16} className="text-[#737373] hover:text-[#DC0000]" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface DroppableColumnProps {
  columnId: string;
  title: string;
  taskIds: string[];
  onAddTask: () => void;
  onDeleteColumn: () => void;
}

const DroppableColumn = ({ columnId, title, taskIds, onAddTask, onDeleteColumn }: DroppableColumnProps) => {
  const { state, deleteTask } = useApp();

  return (
    <div className="min-w-[304px] max-w-[304px] bg-black rounded-lg p-4 flex flex-col group">
      <div className="flex items-baseline gap-2 mb-4 justify-between">
        <div className="flex items-baseline gap-2">
          <h3 className="text-base font-semibold text-white uppercase tracking-wider">
            {title}
          </h3>
          <span className="text-sm text-[#737373]">
            {taskIds.length}
          </span>
        </div>
        <button
          onClick={onDeleteColumn}
          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-[#404040] rounded transition-opacity"
        >
          <Trash2 size={14} className="text-[#737373] hover:text-[#DC0000]" />
        </button>
      </div>

      <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-3 flex-1">
          {taskIds.map((taskId) => {
            const task = state.tasks[taskId];
            if (!task) return null;
            return (
              <SortableTask
                key={task.id}
                task={task}
                onDelete={() => deleteTask(task.id)}
              />
            );
          })}

          <Button
            onClick={onAddTask}
            variant="ghost"
            className="justify-start text-[#737373] hover:bg-[#181818] hover:text-white gap-2 text-sm font-medium"
          >
            <Plus size={16} />
            Add task
          </Button>
        </div>
      </SortableContext>
    </div>
  );
};

export const BoardColumns = () => {
  const { state, addTask, addColumn, deleteColumn, moveTask, moveTaskWithinColumn } = useApp();
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [newTaskColumnId, setNewTaskColumnId] = useState<string | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [isAddingColumn, setIsAddingColumn] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const currentProject = state.currentProjectId ? state.projects[state.currentProjectId] : null;

  if (!currentProject) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-[#737373]">No project selected</p>
      </div>
    );
  }

  const columns = currentProject.columnIds
    .map((id) => state.columns[id])
    .filter(Boolean)
    .sort((a, b) => a.order - b.order);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = state.tasks[active.id as string];
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeTaskId = active.id as string;
    const activeTask = state.tasks[activeTaskId];
    if (!activeTask) return;

    // Check if dropped over a column (column IDs) or a task
    const overTask = state.tasks[over.id as string];
    const overColumn = state.columns[over.id as string];

    if (overColumn) {
      // Dropped directly on a column
      if (activeTask.columnId !== overColumn.id) {
        moveTask(activeTaskId, overColumn.id, overColumn.taskIds.length);
      }
    } else if (overTask) {
      // Dropped on a task
      const overColumnId = overTask.columnId;
      const overTaskColumn = state.columns[overColumnId];

      if (activeTask.columnId === overColumnId) {
        // Same column, reorder
        const oldIndex = overTaskColumn.taskIds.indexOf(activeTaskId);
        const newIndex = overTaskColumn.taskIds.indexOf(overTask.id);
        if (oldIndex !== newIndex) {
          moveTaskWithinColumn(activeTaskId, newIndex);
        }
      } else {
        // Different column
        const newIndex = overTaskColumn.taskIds.indexOf(overTask.id);
        moveTask(activeTaskId, overColumnId, newIndex);
      }
    }
  };

  const handleAddTask = (columnId: string) => {
    setNewTaskColumnId(columnId);
    setNewTaskTitle('');
  };

  const handleCreateTask = () => {
    if (newTaskTitle.trim() && newTaskColumnId) {
      addTask(newTaskColumnId, newTaskTitle.trim());
      setNewTaskColumnId(null);
      setNewTaskTitle('');
    }
  };

  const handleCreateColumn = () => {
    if (newColumnTitle.trim() && currentProject) {
      addColumn(currentProject.id, newColumnTitle.trim());
      setNewColumnTitle('');
      setIsAddingColumn(false);
    }
  };

  const handleDeleteColumn = (columnId: string) => {
    if (confirm('Are you sure you want to delete this column and all its tasks?')) {
      deleteColumn(columnId);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4 min-h-full">
        {columns.map((column) => (
          <DroppableColumn
            key={column.id}
            columnId={column.id}
            title={column.title}
            taskIds={column.taskIds}
            onAddTask={() => handleAddTask(column.id)}
            onDeleteColumn={() => handleDeleteColumn(column.id)}
          />
        ))}

        {newTaskColumnId && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setNewTaskColumnId(null)}>
            <div className="bg-[#181818] border border-[#404040] rounded-lg p-6 w-[400px]" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-white text-lg font-semibold mb-4">Add New Task</h3>
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCreateTask();
                  if (e.key === 'Escape') setNewTaskColumnId(null);
                }}
                placeholder="Task title"
                className="w-full bg-black border border-[#404040] rounded px-3 py-2 text-white focus:border-[#DC0000] outline-none mb-4"
                autoFocus
              />
              <div className="flex gap-2 justify-end">
                <Button
                  variant="ghost"
                  onClick={() => setNewTaskColumnId(null)}
                  className="text-[#737373]"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateTask}
                  className="bg-[#DC0000] hover:bg-[#B00000] text-white"
                >
                  Add Task
                </Button>
              </div>
            </div>
          </div>
        )}

        {isAddingColumn ? (
          <div className="min-w-[304px] max-w-[304px] bg-black rounded-lg p-4">
            <input
              type="text"
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreateColumn();
                if (e.key === 'Escape') {
                  setIsAddingColumn(false);
                  setNewColumnTitle('');
                }
              }}
              placeholder="Column title"
              className="w-full bg-[#181818] border border-[#404040] rounded px-3 py-2 text-white focus:border-[#DC0000] outline-none mb-2"
              autoFocus
            />
            <div className="flex gap-2">
              <Button
                onClick={handleCreateColumn}
                className="flex-1 bg-[#DC0000] hover:bg-[#B00000] text-white text-sm"
                size="sm"
              >
                Add
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsAddingColumn(false);
                  setNewColumnTitle('');
                }}
                className="text-[#737373] text-sm"
                size="sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => setIsAddingColumn(true)}
            variant="outline"
            className="min-w-[200px] border-2 border-dashed border-[#404040] text-[#737373] hover:border-[#DC0000] hover:text-[#DC0000] gap-2 text-sm font-medium h-auto py-4"
          >
            <Plus size={16} />
            Add Section
          </Button>
        )}
      </div>

      <DragOverlay>
        {activeTask && (
          <div className="bg-[#181818] border border-[#DC0000] rounded-lg p-4 shadow-[0_4px_16px_rgba(220,0,0,0.3)] w-[304px]">
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 border-2 border-[#404040] rounded flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-white text-sm leading-relaxed">
                  {activeTask.title}
                </p>
              </div>
            </div>
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};
