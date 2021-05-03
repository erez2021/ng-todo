import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable, Subject} from 'rxjs';
import {ITodo} from '../models/todo.interface'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private todos: Array<ITodo> = []

  private mock: ITodo[] = [{
    "id":"1", "title":"Garden","isCompleted":false,"isArchived":false,"endDate":"10/6/2020","description":"Sixth [abducent] nerve palsy, bilateral","selected":true},
  {"id":"2","title":"Baby","isCompleted":false,"isArchived":false,"endDate":"7/19/2020","description":"Other specified injury of splenic vein","selected":false},
  {"id":"3","title":"Home","isCompleted":false,"isArchived":false,"endDate":"1/27/2021","description":"Antepartum hemorrhage, unspecified, first trimester","selected":false},
  {"id":"4","title":"Baby","isCompleted":false,"isArchived":false,"endDate":"5/28/2020","description":"Exposure to bed fire due to unspecified burning material, sequela","selected":false},
  {"id":"5","title":"Electronics","isCompleted":false,"isArchived":false,"endDate":"7/28/2020","description":"Disorders of left acoustic nerve","selected":false},
  {"id":"6","title":"Baby","isCompleted":false,"isArchived":false,"endDate":"3/13/2021","description":"Other and unspecified diseases of pulp and periapical tissues","selected":false},
  {"id":"7","title":"Beauty","isCompleted":false,"isArchived":false,"endDate":"5/14/2020","description":"War operations involving biological weapons","selected":false}]

private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos)
private _singleTodoSubject : BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null)

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    if (!this._todoSubject.value.length) {
      const storageTodos = localStorage.getItem("todos")
      if(storageTodos) {
        const parseTodos: Array<ITodo> = JSON.parse(storageTodos)
        parseTodos[0].selected = true
      this._todoSubject.next(parseTodos)
      this._singleTodoSubject.next(parseTodos[0])
      }
      
    }
    return this._todoSubject.asObservable()
  }

  public getSelectedTodo(): Observable<ITodo>{
   return this._singleTodoSubject.asObservable()
  }

public setSelectedTodo(todo: ITodo) {
  this._singleTodoSubject.next(todo)
}

public addNewTodo(newTodo: ITodo) {
  const currTodos: Array<ITodo> = this._todoSubject.value
  currTodos.push(newTodo)
  this._todoSubject.next(currTodos)
  localStorage.setItem("todos", JSON.stringify(currTodos))
}
public onTodoAction(todoId: string, action: string) {
  const currTodos: Array<ITodo> = this._todoSubject.value
  const todoIndex = currTodos.findIndex(todo => todo.id === todoId)
  currTodos[todoIndex][action] = true
  this._todoSubject.next(currTodos)
  localStorage.setItem("todos", JSON.stringify(currTodos))
}
}
