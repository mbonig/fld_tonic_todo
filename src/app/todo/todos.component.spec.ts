import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {TodosComponent} from "./todos.component";


describe('Todo', () => {
  // provide our implementations or mocks to the dependency injector
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TodosComponent],
      providers: []
    });
    component = TestBed.createComponent(TodosComponent);
  });

  it('should remove todo', () => {
    component.addTodo("one");
    component.addTodo("two");
    component.addTodo("three");

    let oldThree = component.todos[2];
    component.removeTodo(component.todos[1]);

    expect(component.todos.length).toEqual(2);
    expect(component.todos[1]).toEqual(oldThree);
  });

});
