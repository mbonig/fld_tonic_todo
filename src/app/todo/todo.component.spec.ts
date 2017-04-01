import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {TodoComponent} from "./todo.component";


describe('Todo', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TodoComponent],
      providers: []
    });
  });

  it('should remove todo', () => {
    let component = new TodoComponent();
    component.addTodo("one");
    component.addTodo("two");
    component.addTodo("three");

    let oldThree = component.todos[2];
    component.removeTodo(component.todos[1]);

    expect(component.todos.length).toEqual(2);
    expect(component.todos[1]).toEqual(oldThree);
  });

});
