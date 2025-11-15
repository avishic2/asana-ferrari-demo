import { AppState, Project, Column, Task, Team } from '../types';

const STORAGE_KEY = 'asana-ferrari-data';

export const getInitialState = (): AppState => {
  // Create default project
  const defaultProjectId = 'project-1';
  const todoColumnId = 'column-1';
  const inProgressColumnId = 'column-2';
  const deliverablesColumnId = 'column-3';
  const taskId = 'task-1';

  return {
    projects: {
      [defaultProjectId]: {
        id: defaultProjectId,
        name: 'Ferrari Board',
        icon: 'F',
        color: '#DC0000',
        columnIds: [todoColumnId, inProgressColumnId, deliverablesColumnId],
        createdAt: new Date().toISOString(),
      },
      'project-2': {
        id: 'project-2',
        name: 'Racing Board 2025',
        icon: 'R',
        color: '#DC0000',
        columnIds: [],
        createdAt: new Date().toISOString(),
      },
      'project-3': {
        id: 'project-3',
        name: 'F1 Development',
        icon: 'F',
        color: '#DC0000',
        columnIds: [],
        createdAt: new Date().toISOString(),
      },
    },
    columns: {
      [todoColumnId]: {
        id: todoColumnId,
        title: 'To Do',
        projectId: defaultProjectId,
        order: 0,
        taskIds: [taskId],
      },
      [inProgressColumnId]: {
        id: inProgressColumnId,
        title: 'In Progress',
        projectId: defaultProjectId,
        order: 1,
        taskIds: [],
      },
      [deliverablesColumnId]: {
        id: deliverablesColumnId,
        title: 'Deliverables',
        projectId: defaultProjectId,
        order: 2,
        taskIds: [],
      },
    },
    tasks: {
      [taskId]: {
        id: taskId,
        title: 'Sprint task 1',
        description: '',
        columnId: todoColumnId,
        projectId: defaultProjectId,
        likes: 0,
        createdAt: new Date().toISOString(),
        order: 0,
      },
    },
    teams: {
      'team-1': {
        id: 'team-1',
        name: 'Ferrari Team',
        icon: 'FT',
        projectIds: [defaultProjectId],
      },
      'team-2': {
        id: 'team-2',
        name: 'Racing Squad',
        icon: 'RS',
        projectIds: [],
      },
      'team-3': {
        id: 'team-3',
        name: 'Engineering',
        icon: 'EN',
        projectIds: [],
      },
    },
    currentProjectId: defaultProjectId,
  };
};

export const loadState = (): AppState => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      const initialState = getInitialState();
      saveState(initialState);
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return getInitialState();
  }
};

export const saveState = (state: AppState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};

export const clearState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Error clearing state from localStorage:', err);
  }
};

// Helper function to generate unique IDs
export const generateId = (prefix: string): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
