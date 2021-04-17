import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable} from 'rxjs';
import {ITodo} from '../models/todo.interface'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [{"title":"Garden","isCompleted":false,"isArchived":false,"endDate":"10/6/2020","description":"Sixth [abducent] nerve palsy, bilateral"},
  {"title":"Baby","isCompleted":false,"isArchived":false,"endDate":"7/19/2020","description":"Other specified injury of splenic vein"},
  {"title":"Home","isCompleted":false,"isArchived":false,"endDate":"1/27/2021","description":"Antepartum hemorrhage, unspecified, first trimester"},
  {"title":"Baby","isCompleted":true,"isArchived":false,"endDate":"5/28/2020","description":"Exposure to bed fire due to unspecified burning material, sequela"},
  {"title":"Baby","isCompleted":true,"isArchived":true,"endDate":"3/13/2021","description":"Other and unspecified diseases of pulp and periapical tissues"},
  {"title":"Electronics","isCompleted":false,"isArchived":true,"endDate":"7/28/2020","description":"Disorders of left acoustic nerve"},
  {"title":"Beauty","isCompleted":false,"isArchived":true,"endDate":"5/14/2020","description":"War operations involving biological weapons"}]

private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable()
  }
}
