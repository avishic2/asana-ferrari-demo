import { TabNav } from "@/sections/ProjectTabs/components/TabNav";

export const ProjectTabs = () => {
  return (
    <div className="caret-transparent fill-neutral-500 mt-2">
      <div className="relative caret-transparent fill-neutral-500 shrink-0 min-w-px text-nowrap">
        <TabNav />
      </div>
    </div>
  );
};
