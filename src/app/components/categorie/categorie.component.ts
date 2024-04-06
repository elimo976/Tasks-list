import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorie: string[] = [];
  errorMessage: string = "";
  isResponseReceived: boolean = false;

  constructor(private ts: TaskService) {

  }
  ngOnInit(): void {
    this.ts.getCategorie()
      .subscribe({
        next: cat => {
          this.categorie = cat;
        },
        error: err => {
          this.errorMessage = "Spiacenti! Errore nella chiamata al server.";
          this.isResponseReceived = true;
        }
     });
  }
}
