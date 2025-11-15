import { NavSection } from "@/sections/Sidebar/components/NavSection";
import { useApp } from "@/context/AppContext";
import { useState } from "react";

export const SidebarNav = () => {
  const { state, addProject, setCurrentProject } = useApp();
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");

  const handleAddProject = () => {
    setIsAddingProject(true);
  };

  const handleCreateProject = () => {
    if (newProjectName.trim()) {
      const icon = newProjectName.charAt(0).toUpperCase();
      addProject(newProjectName.trim(), icon);
      setNewProjectName("");
      setIsAddingProject(false);
    }
  };

  const projectItems = Object.values(state.projects).map((project) => ({
    label: project.name,
    href: "#",
    iconUrl: "https://c.animaapp.com/mhy17x94TAovbr/assets/icon-18.svg",
    onClick: () => setCurrentProject(project.id),
    isActive: project.id === state.currentProjectId,
  }));

  const teamItems = Object.values(state.teams).map((team) => ({
    label: team.name,
    href: "#",
    iconUrl: "https://c.animaapp.com/mhy17x94TAovbr/assets/icon-20.svg",
  }));

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
        onNewClick={handleAddProject}
        items={projectItems}
      />

      {isAddingProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsAddingProject(false)}>
          <div className="bg-[#181818] border border-[#404040] rounded-lg p-6 w-[400px]" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white text-lg font-semibold mb-4">Create New Project</h3>
            <input
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreateProject();
                if (e.key === 'Escape') {
                  setIsAddingProject(false);
                  setNewProjectName("");
                }
              }}
              placeholder="Project name"
              className="w-full bg-black border border-[#404040] rounded px-3 py-2 text-white focus:border-[#DC0000] outline-none mb-4"
              autoFocus
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setIsAddingProject(false);
                  setNewProjectName("");
                }}
                className="px-4 py-2 text-[#737373] hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateProject}
                className="px-4 py-2 bg-[#DC0000] hover:bg-[#B00000] text-white rounded transition-colors"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}

      <NavSection
        ariaLabel="Teams"
        title="Teams"
        hasNewButton={true}
        newButtonAriaLabel="New team"
        items={teamItems}
      />
    </div>
  );
};
