import {Component} from "@angular/core";
@Component({
  selector: 'fld-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],

})
export class TodoComponent {

  todos: Todo[] = [];
  newTask = '';

  constructor() {
  }

  addTodo(task) {
    this.todos.unshift({text: task, isCompleted: false});
    this.newTask = '';
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}

interface Todo {
  text: string;
  isCompleted: boolean;
}
