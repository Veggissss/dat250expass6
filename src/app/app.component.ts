import { Component } from '@angular/core';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  inputCard = false;

  todos: Todo[] = [];
  newTodo : Todo = {
    id: 0,
    summary: "",
    description: ""
  }
  
  constructor(private todoService : TodosService){
  }

  toggleInputCard(){
    this.inputCard = !this.inputCard;
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addNewTodo(){
    this.todoService.postTodo(this.newTodo).subscribe((res) => {
      console.log("Added new todo!");
      
      this.newTodo = {
        id: 0,
        summary: "",
        description: ""
      }
      //Update Todos
      this.ngOnInit();
    });
  }

  removeTodo(id: number){
    this.todoService.deleteTodo(id).subscribe((res) => {
        console.log(`Removed Todo with id: ${id}`);

        this.ngOnInit();
    });
  }
}
