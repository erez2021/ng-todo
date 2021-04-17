import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from '../../models/todo.interface'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todos: Array<ITodo> = []

  private subscription: Subscription = new Subscription
  


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodos().subscribe(data => {
        this.todos = data
      })
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  public onTodoClick(todo: ITodo, index: number) {
    this.todoService.setSelectedTodo(todo)
    this.todos.forEach(todo => {
      if (todo.selected) todo.selected = false
      
    })
    this.todos[index].selected = true
  }
}
