import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() curTodo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  onClick(curTodo: Todo)
  {
    this.todoDelete.emit(curTodo);
  }
}
