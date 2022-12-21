import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos = [];
  constructor() {
    if(localStorage.length!=0) this.todos = JSON.parse(localStorage.getItem('todos'));
  }
  deleteTodo(curTodo: Todo) {
    const index = this.todos.indexOf(curTodo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  createTodo(curTodo: Todo) {
    this.todos = this.todos || [];
    this.todos.push(curTodo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
