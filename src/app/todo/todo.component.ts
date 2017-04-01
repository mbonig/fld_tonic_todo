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
    this.todos = this.apiService.addTask(task);
    this.newTask = '';
  }

  removeTodo(todo) {
    this.todos = this.apiService.removeTodo(todo);
  }

  toggleTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
    this.save();
  }

  save() {
    this.apiService.save();
  }
}

interface Todo {
  text: string;
  isCompleted: boolean;
}
