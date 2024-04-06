import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  tasks: Task[] = [];
  errorMessage: string = "";
  isResponseReceived: boolean = false;

  constructor(private ts: TaskService) { }
  ngOnInit(): void {
    
    
    this.ts.getTasks()
      .subscribe({
        next: data => {
          this.tasks = data;
        },
        error: err => {
          this.errorMessage = "Spiacenti! Errore nella chiamata al server.";
          this.isResponseReceived = true;
        }
      });
  }
  deleteCard(id: number): void {
    this.ts.deleteTaskById(id)
      .subscribe({
        next: (dati) => {
          this.tasks = this.tasks.filter(task => task.id !== id);
        },
        error: (error) => {
          alert("Spiacenti! Errore nella chiamata al server.");
        }
      });
  }
}
