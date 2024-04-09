import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{

  @Input() todo!: Todo;
  @ViewChild('physicalInput') physicalInput!: ElementRef;

  checkedCompleted: FormControl = new FormControl();
  textInput: FormControl = new FormControl();

  editing: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkedCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkedCompleted.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggle({id: this.todo.id}))
    });
  }

  edit(){
    this.editing = true;
    this.textInput.setValue(this.todo.text);

    setTimeout(() => {
      this.physicalInput.nativeElement.select();
    }, 1)
  }

  exitEditing(){
    this.editing = false;

    if(this.textInput.invalid || this.textInput.value === this.todo.text) return;

    this.store.dispatch(actions.editing({id: this.todo.id, text: this.textInput.value}))
  }

  exclude(){
    this.store.dispatch(actions.exclude({id: this.todo.id}));
  }
}
