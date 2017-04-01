import {Injectable} from '@angular/core';

const TODO_KEY = 'todos';

@Injectable()
export class ApiService {
  getTodos() {
    let saved = localStorage.getItem(TODO_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  }

  save(todos) {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
}
