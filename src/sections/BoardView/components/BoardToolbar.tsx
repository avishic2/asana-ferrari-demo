import { Plus, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BoardToolbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-black border-b border-[#404040]">
      <div className="flex gap-2">
        <Button variant="outline" className="border-[#404040] text-white hover:border-[#DC0000] hover:text-[#DC0000] gap-2 text-xs font-medium">
          <Plus size={16} />
          Add Task
        </Button>
      </div>

      <div className="flex gap-2 items-center">
        <Button variant="ghost" className="text-[#737373] hover:bg-[#181818] hover:text-white gap-2 text-xs font-medium">
          <Filter size={16} />
          Filter
        </Button>

        <Button variant="ghost" size="icon" className="text-[#737373] hover:bg-[#181818] hover:text-white">
          <Search size={16} />
        </Button>
      </div>
    </div>
  );
};
