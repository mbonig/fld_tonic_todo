import {Component} from "@angular/core";
import {ApiService} from "../shared/api.service";
@Component({
  selector: 'fld-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ApiService]
})
export class TodoComponent {

  todos: Todo[] = [];
  newTask = '';

  constructor(private apiService: ApiService) {
    let saved = apiService.getTodos();
    if (saved && saved.length > 0) {
      this.todos = saved;
    }
  }

  addTodo(task) {
    this.todos.unshift({text: task, isCompleted: false});
    this.newTask = '';
    this.save();
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.save();
  }

  save() {
    this.apiService.save(this.todos);
  }
}

interface Todo {
  text: string;
  isCompleted: boolean;
}
