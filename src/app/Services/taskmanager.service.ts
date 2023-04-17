import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  tasks = [{ name: "Task 2", status: "false", date:"10/10/2023", id:"2"}]


  constructor(private http:HttpClient) {}

  getTasks(): any{
   return this.http.get("http://localhost:3000/tasks")
  }
  changeStatus(id:any) {
    return this.http.get("http://localhost:3000/tasks/status/" + id).subscribe(
     (responseData:any) => this.tasks = responseData
   )
  }

}










