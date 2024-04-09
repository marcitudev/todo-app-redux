import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  textInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl(null, Validators.required);
  }

  aggregate(){
    if(this.textInput.invalid) return;
    this.store.dispatch(actions.create({ text: this.textInput.value }));

    this.textInput.reset();
  }
}
