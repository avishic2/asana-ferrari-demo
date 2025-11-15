import { ProjectHeader } from "@/sections/ProjectHeader";
import { BoardView } from "@/sections/BoardView";

export const MainContent = () => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#181818'
    }}>
      <ProjectHeader />
      <BoardView />
    </main>
  );
};
