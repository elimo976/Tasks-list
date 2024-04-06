import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-categoria',
  templateUrl: './tasks-categoria.component.html',
  styleUrls: ['./tasks-categoria.component.css']
})
export class TasksCategoriaComponent implements OnInit {
  tasks: Task[] = [];
  categoria: string = "";
  errorMessage: string = "";
  isResponseReceived: boolean = false;

  constructor(private ts: TaskService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const cat = this.route.snapshot.paramMap.get("cat");
    // PER IVANO: ho provato ad utilizzare il params al posto di snapshot, ma mi dava dei problemi.

    this.categoria = cat!;

    this.ts.getTasksByCategorie(cat!)
      .subscribe({
        next: dati => {
          this.tasks = dati
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
      alert ("Spiacenti! Errore nella chiamata al server.");
    }
  });
}

  
}
