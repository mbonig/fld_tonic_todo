import {TestBed} from '@angular/core/testing';
import {provideRoutes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {ApiService} from './shared';
import {AppComponent} from './app.component';
import {TodosComponent} from "./todo/todos.component";
import {TodoComponent} from "./todo/todo.component";

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, TodosComponent, TodoComponent],
      providers: [ApiService, provideRoutes([])]
    });
  });
});
