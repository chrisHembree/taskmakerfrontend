import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagerComponent } from './Components/taskmanager/taskmanager.component';

const routes: Routes = [

{ path: 'taskmanager', component: TaskManagerComponent },
{path: '', component:TaskManagerComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
