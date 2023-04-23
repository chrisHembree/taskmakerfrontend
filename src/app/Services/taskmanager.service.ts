import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task';


@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  tasks: Task[]= []


  constructor(private http:HttpClient) {}

  getTasks() {
   return this.http.get<Task[]>("http://localhost:3000/tasks").subscribe(
    (responseData:any) => this.tasks = responseData
   )
  }

  changeStatus(id: any, status: any) {
    return this.http.put<Task[]>("http://localhost:3000/tasks/status/" + id, status).subscribe(
     (responseData:any) => this.tasks = responseData
   )
  }

}










