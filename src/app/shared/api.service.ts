import {Injectable} from '@angular/core';
import {Todo} from "../model/todo.interface";

const TODO_KEY = 'todos';

@Injectable()
export class ApiService {
  private static todos: Todo[] = [];

  getTodos() {
    let saved = localStorage.getItem(TODO_KEY);
    if (saved) {
      return ApiService.todos = JSON.parse(saved);
    }
    return null;
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(ApiService.todos));
  }

  addTodo(task: any) {
    ApiService.todos.unshift({text: task, isCompleted: false});
    this.save();
    return ApiService.todos;
  }

  removeTodo(todo: any) {
    ApiService.todos.splice(ApiService.todos.indexOf(todo), 1);
    this.save();
    return ApiService.todos;
  }
}
