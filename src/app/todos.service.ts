import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private url = "http://localhost:8080";
  constructor(private httpClient: HttpClient) {

  }

  getTodos() : Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.url}/todos`);
  }

  postTodo(data: any) : Observable<Todo> {
    return this.httpClient.post<Todo>(`${this.url}/todos`,data);
  }

  deleteTodo(id: number) : Observable<Todo>{
    return this.httpClient.delete<Todo>(`${this.url}/todos/${id}`);
  }

  //putTodo
}
