import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'fld-todo-editor',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ApiService]
})
export class TodoComponent implements OnInit {


  @Input() todo;
  @HostBinding('class.completed') isCompleted;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.isCompleted = this.todo.isCompleted;
  }

  removeTodo() {
    this.apiService.removeTodo(this.todo);
  }

  toggleTodo() {
    this.isCompleted = (this.todo.isCompleted = !this.todo.isCompleted);
    this.save();
  }

  save() {
    this.apiService.save();
  }
}

