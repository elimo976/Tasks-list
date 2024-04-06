import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = "http://localhost:3000";
  params: any;

  constructor(private http: HttpClient) { }


  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`)
  }

  getCategorie(): Observable<string[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`)
      .pipe(
        map(tasks => {
          const categorie = Array.from(new Set(tasks.map(task => task.cat)));
          return categorie;
        })
      );
  }

  getTasksByCategorie(cat: string): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/tasks?cat=` + cat);
  }

  deleteTaskById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tasks/${id}`)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/tasks`, task);
  }
}

// APPUNTI DI STUDIO
// map: operatore RxJs che trasforma ogni elemento del mio flusso di dati in un altro valore. Nello specifico, sto mappando ogni oggetto 'Task' nell'array di 'Task' alla proprietà 'cat', restituendo appunto un array di solo i valori della proprietà 'cat' di ogni oggetto.
//  new Set: è un oggetto di JS che consta in una collezione di elementi unici, così da non ammettere duplicati.
// Array.from: converte l'oggetto 'Set' in un array.
