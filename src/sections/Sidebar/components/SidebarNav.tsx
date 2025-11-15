import { NavSection } from "@/sections/Sidebar/components/NavSection";

export const SidebarNav = () => {
  return (
    <div style={{
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: '0 16px'
    }}>
      <NavSection
        ariaLabel="Projects"
        title="Projects"
        hasNewButton={true}
        newButtonAriaLabel="New project"
        items={[
          {
            label: "Racing Board 2025",
            href: "#",
            iconUrl: "https://c.animaapp.com/mhy17x94TAovbr/assets/icon-14.svg",
          },
          {
            label: "F1 Development",
            href: "#",
            iconUrl: "https://c.animaapp.com/mhy17x94TAovbr/assets/icon-18.svg",
          },
          {
            label: "Ferrari Board",
            href: "#",
            iconUrl: "https://c.animaapp.com/mhy17x94TAovbr/assets/icon-18.svg",
          },
        ]}
      />

      <NavSection
        ariaLabel="Teams"
        title="Teams"
        hasNewButton={true}
        newButtonAriaLabel="New team"
        items={[
          {
            label: "Ferrari Team",
            href: "#",
            iconUrl: "https://c.animaapp.com/mhy17x94TAovbr/assets/icon-20.svg",
          },
          {
            label: "Racing Squad",
            href: "#",
            iconUrl: "https://c.animaapp.com/mhy17x94TAovbr/assets/icon-20.svg",
          },
          {
            label: "Engineering",
            href: "#",
            iconUrl: "https://c.animaapp.com/mhy17x94TAovbr/assets/icon-20.svg",
          },
        ]}
      />
    </div>
  );
};
