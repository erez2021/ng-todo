import { Component, Input,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo} from '../../models/todo.interface'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    @Input() set todo(todo: ITodo){
     this._todo = todo
    }
    get todo() {
      return this._todo
    }

    private _todo: ITodo

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

  }

 public onCompleteTodo(todo: ITodo) {
   this.todoService.onTodoAction(todo.id, "isCompleted")
 }
 public onArchiveTodo() {
   this.todo.isArchived = true
   this.todoService.onTodoAction(this.todo.id, "isArchived")
   
 }
}
