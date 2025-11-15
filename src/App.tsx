import { Menu, Search, User } from 'lucide-react';
import { Sidebar } from '@/sections/Sidebar';
import { MainContent } from '@/sections/MainContent';
import './index.css';

export const App = () => {
  return (
    <div className="flex flex-col h-screen bg-[#181818] text-white overflow-hidden">
      {/* Ferrari Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-black border-b border-[#404040] h-12 flex-shrink-0">
        <div className="flex items-center gap-6">
          <button className="bg-transparent border-none text-white cursor-pointer p-2">
            <Menu size={20} />
          </button>
          <div className="text-xl font-bold text-[#DC0000] uppercase tracking-[2px]">
            FERRARI
          </div>
        </div>
        
        <div className="flex-1 max-w-[540px] mx-6 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737373]" />
          <input
            type="search"
            placeholder="Search Ferrari Projects"
            className="w-full bg-[#27272A] border border-[#404040] rounded-full px-4 py-2 pl-10 text-white text-sm focus:outline-none focus:border-[#DC0000]"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="bg-transparent border-none text-[#E5E5E5] cursor-pointer p-2 rounded-full hover:bg-[#181818]">
            <User size={20} />
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-60 bg-black border-r border-[#404040] flex-shrink-0 overflow-auto">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <MainContent />
        </div>
      </div>
    </div>
  );
};
