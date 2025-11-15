import { Zap, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SidebarFooter = () => {
  return (
    <div className="p-4 border-t border-[#404040] flex flex-col gap-2">
      <Button className="w-full bg-[#DC0000] hover:bg-[#B00000] text-white rounded text-xs font-semibold uppercase tracking-wider gap-2">
        <Zap size={16} />
        Upgrade
      </Button>

      <Button variant="outline" className="w-full border-[#404040] text-[#E5E5E5] hover:bg-[#181818] hover:border-[#737373] rounded text-xs font-medium gap-2">
        <UserPlus size={16} />
        Invite Team
      </Button>
    </div>
  );
};
