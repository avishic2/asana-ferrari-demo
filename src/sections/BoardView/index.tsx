import { BoardToolbar } from "@/sections/BoardView/components/BoardToolbar";
import { BoardColumns } from "@/sections/BoardView/components/BoardColumns";

export const BoardView = () => {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <BoardToolbar />
      <div style={{
        flex: 1,
        overflowX: 'auto',
        overflowY: 'auto',
        padding: '24px'
      }}>
        <BoardColumns />
      </div>
    </div>
  );
};
