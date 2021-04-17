import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo} from '../../models/todo.interface'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

    public todo: ITodo
    private subscription: Subscription = new Subscription()
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data => {
        this.todo = data
      })
    )
  }
 ngOnDestroy(){
   this.subscription.unsubscribe()
 }
 public onCompleteTodo(todo: ITodo) {
   todo.isCompleted = !todo.isCompleted
 }
 public onArchiveTodo(index: number) {
   this.todo.isArchived = true
   this.todo[index] = this.todo[index+1]
 }
}
