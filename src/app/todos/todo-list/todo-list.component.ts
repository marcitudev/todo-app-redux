import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { validFilters } from '../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{

  todos: Todo[] = [];
  currentFilter: validFilters = 'all';

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.currentFilter = filter;
    });
  }

}
