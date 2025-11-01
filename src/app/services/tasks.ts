import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
 
  private apiUrl = 'http://localhost:5001/api/tasks';
  

  constructor(private http: HttpClient) {}

  // Fetch all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Add a task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // Delete a task
  deleteTask(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }
}
