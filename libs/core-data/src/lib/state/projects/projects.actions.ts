import { Action } from '@ngrx/store';
import { Project } from '@workshop/core-data';

export enum ProjectsActionTypes {
  selectProject = '[Projects] Select data',
  loadProject = '[Projects] Load data',
  addProject = '[Projects] Add data',
  updateProject = '[Projects] Update data',
  deleteProject = '[Projects] Delete data'
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.selectProject;

  constructor(private payload: Project) {
  }
}

export class LoadProject implements Action {
  readonly type = ProjectsActionTypes.loadProject;

  constructor(private payload: Project[]) {
  }
}

export class AddProject implements Action {
  readonly type = ProjectsActionTypes.addProject;

  constructor(private payload: Project) {
  }
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.updateProject;

  constructor(private payload: Project) {
  }
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.deleteProject;

  constructor(private payload: Project) {
  }
}

export type ProjectsAction =
  SelectProject | AddProject | UpdateProject | DeleteProject | LoadProject;
