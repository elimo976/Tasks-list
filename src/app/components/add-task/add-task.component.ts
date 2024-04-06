import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskAddDTO, Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title: FormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]);
  cat: FormControl = new FormControl('', Validators.required);
  completed: FormControl = new FormControl(false);

  constructor(private ts: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  addTask(): void {
    const task: TaskAddDTO = {
      title: this.title.value,
      cat: this.cat.value,
      completed: this.completed.value,
      id: 0
    };

    this.ts.addTask(task).subscribe({
      next: (newTask: Task) => {
        if (confirm(`Task aggiunto con successo`)) {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        alert("Ooops! Qualcosa è andato storto.");
      }
    });
  }
}



