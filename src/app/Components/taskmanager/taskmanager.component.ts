import { Component } from '@angular/core';
import { TaskManagerService } from 'src/app/Services/taskmanager.service';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskManagerComponent {
  constructor(public taskManagerService:TaskManagerService) {
    this.taskManagerService.getTasks()
  }

}
