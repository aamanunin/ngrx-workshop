import { Project } from './../../projects/project.model';
import { ProjectsActionTypes } from './projects.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];

const createProject = (projects, project) => [...projects, project];
const updateProject = (projects, project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects, project) => projects.filter(w => project.id !== w.id);

// 01 Define the shape of my state
export interface ProjectsState extends EntityState<Project> {
  selectedProjectId: string | null;
}

export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

// 02 Define the initial state
export const initialState: ProjectsState = adapter.getInitialState({
  selectedProjectId: null
});

// 03 Build the MOST simplest reducer
export function projectsReducers(
  state = initialState, action): ProjectsState {
    switch(action.type) {
      case ProjectsActionTypes.selectProject:
        return {
          ...state,
          selectedProjectId: action.payload
        };
      case ProjectsActionTypes.loadProject:
        return adapter.addMany(action.payload, state);
      case ProjectsActionTypes.addProject:
        return adapter.addOne(action.payload, state);
      case ProjectsActionTypes.updateProject:
        return adapter.updateOne(action.payload, state);
      case ProjectsActionTypes.deleteProject:
        return adapter.removeOne(action.payload, state)
      default:
        return state;
    }
}
