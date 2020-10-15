import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { selectAllProjects, selectCurrentProject } from './..';
import { ProjectsState } from './projects.reducer';
import { AddProject, DeleteProject, LoadProject, SelectProject, UpdateProject } from './projects.actions';

@Injectable({
  providedIn: 'root'
})
export class ProjectsFacade {
  projects$ = this.store.pipe(select(selectAllProjects));
  currentProject$ = this.store.pipe(select(selectCurrentProject));

  constructor(private store: Store<ProjectsState>) {}

  getProjects() {
    this.store.dispatch(new LoadProject());
  }

  resetCurrentProject() {
    this.store.dispatch(new SelectProject(null));
  }

  selectProject(project) {
    this.store.dispatch(new SelectProject(project.id))
  }

  createProject(project) {
    this.store.dispatch(new AddProject(project));
  }

  updateProject(project) {
    this.store.dispatch(new UpdateProject(project));
  }

  deleteProject(project) {
    this.store.dispatch(new DeleteProject(project));
  }
}
