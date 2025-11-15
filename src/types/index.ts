export interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
  projectId: string;
  assignee?: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
  likes: number;
  createdAt: string;
  order: number;
}

export interface Column {
  id: string;
  title: string;
  projectId: string;
  order: number;
  taskIds: string[];
}

export interface Project {
  id: string;
  name: string;
  icon: string;
  color?: string;
  columnIds: string[];
  createdAt: string;
}

export interface Team {
  id: string;
  name: string;
  icon: string;
  projectIds: string[];
}

export interface AppState {
  projects: Record<string, Project>;
  columns: Record<string, Column>;
  tasks: Record<string, Task>;
  teams: Record<string, Team>;
  currentProjectId: string | null;
}
