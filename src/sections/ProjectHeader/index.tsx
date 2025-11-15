import { Star, Settings, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProjectHeader = () => {
  return (
    <div className="bg-black border-b border-[#404040] px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#DC0000] rounded flex items-center justify-center text-white text-base font-bold">
            F
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white mb-1">
              Ferrari Board
            </h1>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-[#737373] hover:text-[#DC0000]">
              <Star size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#737373] hover:text-[#DC0000]">
              <Settings size={20} />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex mr-2">
            <div className="w-7 h-7 rounded-full bg-[#DC0000] border-2 border-black -ml-2" />
            <div className="w-7 h-7 rounded-full bg-[#737373] border-2 border-black -ml-2" />
          </div>
          <Button className="bg-[#DC0000] hover:bg-[#B00000] text-white gap-2 text-xs font-semibold">
            <Share size={16} />
            Share
          </Button>
          <Button variant="outline" className="border-[#404040] text-[#E5E5E5] hover:border-[#DC0000] hover:text-[#DC0000] text-xs font-medium">
            Customize
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[#404040] -mb-4">
        {['Overview', 'List', 'Board', 'Timeline', 'Dashboard', 'Calendar'].map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all -mb-px ${
              index === 2
                ? 'text-white border-b-2 border-[#DC0000]'
                : 'text-[#737373] border-b-2 border-transparent hover:text-[#E5E5E5]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
