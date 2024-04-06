import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksCategoriaComponent } from './components/tasks-categoria/tasks-categoria.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

const routes: Routes = [
  { path: '', component: TaskDetailComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'task-detail/:cat', component: TasksCategoriaComponent },
  { path: 'task/:id', component: TaskDetailComponent },
  { path: "add-task", component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
