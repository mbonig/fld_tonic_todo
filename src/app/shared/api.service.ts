import {Injectable} from '@angular/core';

const TODO_KEY = 'todos';

@Injectable()
export class ApiService {
  private todos: any[] = [];

  getTodos() {
    let saved = localStorage.getItem(TODO_KEY);
    if (saved) {
      return this.todos = JSON.parse(saved);
    }
    return null;
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTask(task: any) {
    this.todos.unshift({text: task, isCompleted: false});
    this.save();
    return this.todos;
  }

  removeTodo(todo: any) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.save();
    return this.todos;
  }
}
