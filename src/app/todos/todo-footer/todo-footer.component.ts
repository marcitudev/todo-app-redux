import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../filter/filter.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit{

  currentFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'completed', 'pending'];

  pending: number = 0;

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.store.subscribe(({todos, filter}) => {
      this.currentFilter = filter;
      this.pending = todos.filter(todo => !todo.completed).length;
    })
  }

  setFilter(filter: actions.validFilters){
    this.store.dispatch(actions.setFilter({filter}));
  }

  clearCompleted(){
    this.store.dispatch(todoActions.excludeCompleted());
  }

}
