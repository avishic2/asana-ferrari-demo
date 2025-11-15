import { useApp } from "@/context/AppContext";

export const ProjectTitle = () => {
  const { state } = useApp();
  const currentProject = state.currentProjectId ? state.projects[state.currentProjectId] : null;

  return (
    <div>
      <h1 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {currentProject?.name || 'No Project Selected'}
      </h1>
    </div>
  );
};
