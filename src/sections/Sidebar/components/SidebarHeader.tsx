import { Plus, Home, CheckSquare, Inbox } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SidebarHeader = () => {
  return (
    <nav className="px-4 mb-4">
      <Button 
        className="w-full bg-[#DC0000] hover:bg-[#B00000] text-white rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider mb-4 gap-2"
      >
        <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
          <Plus size={16} className="text-[#DC0000]" />
        </div>
        Create
      </Button>

      <div className="flex flex-col gap-1">
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#E5E5E5] hover:bg-[#181818] hover:text-white rounded-lg text-sm transition-all">
          <Home size={20} />
          Home
        </a>

        <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#E5E5E5] hover:bg-[#181818] hover:text-white rounded-lg text-sm transition-all">
          <CheckSquare size={20} />
          My Tasks
        </a>

        <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#E5E5E5] hover:bg-[#181818] hover:text-white rounded-lg text-sm transition-all">
          <Inbox size={20} />
          Inbox
        </a>
      </div>
    </nav>
  );
};
