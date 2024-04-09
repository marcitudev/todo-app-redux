import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Testing 123'),
  new Todo('Testing 456'),
  new Todo('Testing 789'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    });
  }),
  on(actions.editing, (state, { id, text }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          text: text
        }
      }
      return todo;
    });
  }),
  on(actions.exclude, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.excludeCompleted, state => state.filter(todo => !todo.completed)),
  on(actions.toggleAll, (state, { completed }) => {
    return state.map(todo => {
      return {
        ...todo,
        completed: completed
      }
    });
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
