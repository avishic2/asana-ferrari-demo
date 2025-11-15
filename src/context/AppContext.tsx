import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppState, Project, Column, Task, Team } from '../types';
import { loadState, saveState, generateId } from '../utils/localStorage';

interface AppContextType {
  state: AppState;
  // Project actions
  addProject: (name: string, icon: string) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  setCurrentProject: (id: string) => void;
  // Column actions
  addColumn: (projectId: string, title: string) => void;
  updateColumn: (id: string, updates: Partial<Column>) => void;
  deleteColumn: (id: string) => void;
  moveColumn: (columnId: string, newOrder: number) => void;
  // Task actions
  addTask: (columnId: string, title: string, description?: string) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (taskId: string, newColumnId: string, newOrder: number) => void;
  moveTaskWithinColumn: (taskId: string, newOrder: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(loadState);

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveState(state);
  }, [state]);

  // Project actions
  const addProject = (name: string, icon: string) => {
    const newProject: Project = {
      id: generateId('project'),
      name,
      icon,
      color: '#DC0000',
      columnIds: [],
      createdAt: new Date().toISOString(),
    };
    setState((prev) => ({
      ...prev,
      projects: {
        ...prev.projects,
        [newProject.id]: newProject,
      },
    }));
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setState((prev) => ({
      ...prev,
      projects: {
        ...prev.projects,
        [id]: { ...prev.projects[id], ...updates },
      },
    }));
  };

  const deleteProject = (id: string) => {
    setState((prev) => {
      const newProjects = { ...prev.projects };
      delete newProjects[id];

      // Delete associated columns and tasks
      const columnsToDelete = Object.values(prev.columns)
        .filter((col) => col.projectId === id)
        .map((col) => col.id);

      const newColumns = { ...prev.columns };
      columnsToDelete.forEach((colId) => delete newColumns[colId]);

      const newTasks = { ...prev.tasks };
      Object.values(prev.tasks).forEach((task) => {
        if (task.projectId === id) {
          delete newTasks[task.id];
        }
      });

      return {
        ...prev,
        projects: newProjects,
        columns: newColumns,
        tasks: newTasks,
        currentProjectId: prev.currentProjectId === id ? null : prev.currentProjectId,
      };
    });
  };

  const setCurrentProject = (id: string) => {
    setState((prev) => ({
      ...prev,
      currentProjectId: id,
    }));
  };

  // Column actions
  const addColumn = (projectId: string, title: string) => {
    const project = state.projects[projectId];
    if (!project) return;

    const newColumn: Column = {
      id: generateId('column'),
      title,
      projectId,
      order: project.columnIds.length,
      taskIds: [],
    };

    setState((prev) => ({
      ...prev,
      columns: {
        ...prev.columns,
        [newColumn.id]: newColumn,
      },
      projects: {
        ...prev.projects,
        [projectId]: {
          ...prev.projects[projectId],
          columnIds: [...prev.projects[projectId].columnIds, newColumn.id],
        },
      },
    }));
  };

  const updateColumn = (id: string, updates: Partial<Column>) => {
    setState((prev) => ({
      ...prev,
      columns: {
        ...prev.columns,
        [id]: { ...prev.columns[id], ...updates },
      },
    }));
  };

  const deleteColumn = (id: string) => {
    setState((prev) => {
      const column = prev.columns[id];
      if (!column) return prev;

      const newColumns = { ...prev.columns };
      delete newColumns[id];

      // Delete tasks in this column
      const newTasks = { ...prev.tasks };
      column.taskIds.forEach((taskId) => delete newTasks[taskId]);

      // Remove from project
      const newProjects = { ...prev.projects };
      const project = newProjects[column.projectId];
      if (project) {
        project.columnIds = project.columnIds.filter((colId) => colId !== id);
      }

      return {
        ...prev,
        columns: newColumns,
        tasks: newTasks,
        projects: newProjects,
      };
    });
  };

  const moveColumn = (columnId: string, newOrder: number) => {
    setState((prev) => {
      const column = prev.columns[columnId];
      if (!column) return prev;

      const project = prev.projects[column.projectId];
      if (!project) return prev;

      const newColumnIds = [...project.columnIds];
      const oldIndex = newColumnIds.indexOf(columnId);
      newColumnIds.splice(oldIndex, 1);
      newColumnIds.splice(newOrder, 0, columnId);

      return {
        ...prev,
        projects: {
          ...prev.projects,
          [column.projectId]: {
            ...project,
            columnIds: newColumnIds,
          },
        },
      };
    });
  };

  // Task actions
  const addTask = (columnId: string, title: string, description?: string) => {
    const column = state.columns[columnId];
    if (!column) return;

    const newTask: Task = {
      id: generateId('task'),
      title,
      description,
      columnId,
      projectId: column.projectId,
      likes: 0,
      createdAt: new Date().toISOString(),
      order: column.taskIds.length,
    };

    setState((prev) => ({
      ...prev,
      tasks: {
        ...prev.tasks,
        [newTask.id]: newTask,
      },
      columns: {
        ...prev.columns,
        [columnId]: {
          ...prev.columns[columnId],
          taskIds: [...prev.columns[columnId].taskIds, newTask.id],
        },
      },
    }));
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setState((prev) => ({
      ...prev,
      tasks: {
        ...prev.tasks,
        [id]: { ...prev.tasks[id], ...updates },
      },
    }));
  };

  const deleteTask = (id: string) => {
    setState((prev) => {
      const task = prev.tasks[id];
      if (!task) return prev;

      const newTasks = { ...prev.tasks };
      delete newTasks[id];

      // Remove from column
      const column = prev.columns[task.columnId];
      const newColumns = { ...prev.columns };
      if (column) {
        newColumns[task.columnId] = {
          ...column,
          taskIds: column.taskIds.filter((taskId) => taskId !== id),
        };
      }

      return {
        ...prev,
        tasks: newTasks,
        columns: newColumns,
      };
    });
  };

  const moveTask = (taskId: string, newColumnId: string, newOrder: number) => {
    setState((prev) => {
      const task = prev.tasks[taskId];
      if (!task) return prev;

      const oldColumn = prev.columns[task.columnId];
      const newColumn = prev.columns[newColumnId];
      if (!oldColumn || !newColumn) return prev;

      const newColumns = { ...prev.columns };

      // Remove from old column
      newColumns[oldColumn.id] = {
        ...oldColumn,
        taskIds: oldColumn.taskIds.filter((id) => id !== taskId),
      };

      // Add to new column
      const newTaskIds = [...newColumn.taskIds];
      newTaskIds.splice(newOrder, 0, taskId);
      newColumns[newColumn.id] = {
        ...newColumn,
        taskIds: newTaskIds,
      };

      return {
        ...prev,
        tasks: {
          ...prev.tasks,
          [taskId]: {
            ...task,
            columnId: newColumnId,
          },
        },
        columns: newColumns,
      };
    });
  };

  const moveTaskWithinColumn = (taskId: string, newOrder: number) => {
    setState((prev) => {
      const task = prev.tasks[taskId];
      if (!task) return prev;

      const column = prev.columns[task.columnId];
      if (!column) return prev;

      const newTaskIds = [...column.taskIds];
      const oldIndex = newTaskIds.indexOf(taskId);
      newTaskIds.splice(oldIndex, 1);
      newTaskIds.splice(newOrder, 0, taskId);

      return {
        ...prev,
        columns: {
          ...prev.columns,
          [column.id]: {
            ...column,
            taskIds: newTaskIds,
          },
        },
      };
    });
  };

  const value: AppContextType = {
    state,
    addProject,
    updateProject,
    deleteProject,
    setCurrentProject,
    addColumn,
    updateColumn,
    deleteColumn,
    moveColumn,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    moveTaskWithinColumn,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
