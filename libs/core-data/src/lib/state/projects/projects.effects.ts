import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { AddProject, LoadProject, ProjectAdded, ProjectsActionTypes, ProjectsLoaded } from './projects.actions';
import { ProjectsState } from './projects.reducer';
import { Project } from '../../projects/project.model';
import { ProjectsService } from '../../projects/projects.service';

@Injectable({providedIn: 'root'})
export class ProjectsEffects {
  @Effect()
  loadProjects$ = this.dataPersistence.fetch(ProjectsActionTypes.loadProject, {
    run: (action: LoadProject, state: ProjectsState) => {
      return this.projectsService.all().pipe(
        map((res: Project[]) => new ProjectsLoaded(res))
      )
    },
    onError: () => {}
  });

  @Effect()
  addProject$ = this.dataPersistence.pessimisticUpdate(ProjectsActionTypes.addProject, {
    run: (action: AddProject, state: ProjectsState) => {
      return this.projectsService.create(action.payload).pipe(
        map((res: Project) => new ProjectAdded(res))
      )
    },
    onError: () => {}
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProjectsState>,
    private projectsService: ProjectsService
  ) {}
}
