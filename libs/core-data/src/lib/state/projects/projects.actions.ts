import { Action } from '@ngrx/store';
import { Project } from '@workshop/core-data';

export enum ProjectsActionTypes {
  selectProject = '[Projects] Select data',

  loadProject = '[Projects] Load data',
  projectsLoaded = '[Projects] Data Loaded',

  addProject = '[Projects] Add data',
  projectAdded = '[Projects] Data added',

  updateProject = '[Projects] Update data',
  deleteProject = '[Projects] Delete data'
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.selectProject;

  constructor(public payload: number) {
  }
}

export class LoadProject implements Action {
  readonly type = ProjectsActionTypes.loadProject;
}

export class ProjectsLoaded implements Action {
  readonly type = ProjectsActionTypes.projectsLoaded;

  constructor(public payload: Project[]) {
  }
}

export class AddProject implements Action {
  readonly type = ProjectsActionTypes.addProject;

  constructor(public payload: Project) {
  }
}

export class ProjectAdded implements Action {
  readonly type = ProjectsActionTypes.projectAdded;

  constructor(public payload: Project) {
  }
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.updateProject;

  constructor(public payload: Project) {
  }
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.deleteProject;

  constructor(public payload: Project) {
  }
}

export type ProjectsAction =
  SelectProject | AddProject | UpdateProject | DeleteProject | LoadProject
  | ProjectAdded | ProjectsLoaded;
