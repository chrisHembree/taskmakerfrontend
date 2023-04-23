import { Component } from '@angular/core';
import { TaskManagerService } from 'src/app/Services/taskmanager.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/task';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskManagerComponent {


  constructor(public taskManagerService: TaskManagerService, public http: HttpClient) {
    this.taskManagerService.getTasks();
  }

  taskForm = new FormGroup({
    name: new FormControl(""),
    date: new FormControl(""),
  });

  onSubmitTask() {
    this.http.post<Task[]>("http://localhost:3000/tasks", this.taskForm.value).subscribe();
     this.taskManagerService.getTasks()
  }

}
