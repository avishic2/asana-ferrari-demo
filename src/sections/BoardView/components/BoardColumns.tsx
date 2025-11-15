import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BoardColumns = () => {
  const columns = [
    { title: 'To Do', count: 1, tasks: ['Sprint task 1'] },
    { title: 'In Progress', count: 0, tasks: [] },
    { title: 'Deliverables', count: 0, tasks: [] },
  ];

  return (
    <div className="flex gap-4 min-h-full">
      {columns.map((column, index) => (
        <div
          key={index}
          className="min-w-[304px] max-w-[304px] bg-black rounded-lg p-4 flex flex-col"
        >
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider">
              {column.title}
            </h3>
            <span className="text-sm text-[#737373]">
              {column.count}
            </span>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {column.tasks.map((task, taskIndex) => (
              <div
                key={taskIndex}
                className="bg-[#181818] border border-[#404040] rounded-lg p-4 cursor-pointer transition-all hover:border-[#DC0000] hover:shadow-[0_2px_8px_rgba(220,0,0,0.15)]"
              >
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-[#404040] rounded flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      {task}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#404040] flex items-center justify-center text-[#737373]">
                        <Plus size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Button variant="ghost" className="justify-start text-[#737373] hover:bg-[#181818] hover:text-white gap-2 text-sm font-medium">
              <Plus size={16} />
              Add task
            </Button>
          </div>
        </div>
      ))}

      <Button variant="outline" className="min-w-[200px] border-2 border-dashed border-[#404040] text-[#737373] hover:border-[#DC0000] hover:text-[#DC0000] gap-2 text-sm font-medium h-auto py-4">
        <Plus size={16} />
        Add Section
      </Button>
    </div>
  );
};
