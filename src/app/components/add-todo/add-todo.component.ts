import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string;
  desc: string;
  @Output() createTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    var todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.createTodo.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
