import {Component} from "@angular/core";
import {ApiService} from "../shared/api.service";
import {Todo} from "../model/todo.interface";

@Component({
  selector: 'fld-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [ApiService]
})
export class TodosComponent {

  todos: Todo[] = [];
  newTask = '';

  constructor(private apiService: ApiService) {
    let saved = apiService.getTodos();
    if (saved && saved.length > 0) {
      this.todos = saved;
    }
  }

  addTodo(task) {
    this.todos = this.apiService.addTodo(task);
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
