import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TodoListComponent } from './cmps/todo-list/todo-list.component';
import { HeaderComponent } from './cmps/header/header.component';
import { TodoComponent } from './cmps/todo/todo.component';
import { NewTodoComponent } from './cmps/new-todo/new-todo.component';
import { TodoContainerComponent } from './cmps/todo-container/todo-container.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TodoComponent,
    NewTodoComponent,
    TodoContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
