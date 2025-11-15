import { SidebarHeader } from "@/sections/Sidebar/components/SidebarHeader";
import { SidebarNav } from "@/sections/Sidebar/components/SidebarNav";
import { SidebarFooter } from "@/sections/Sidebar/components/SidebarFooter";

export const Sidebar = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#000000',
      padding: '16px 0'
    }}>
      <SidebarHeader />
      <SidebarNav />
      <SidebarFooter />
    </div>
  );
};
