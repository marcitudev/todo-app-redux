import { createReducer, on } from "@ngrx/store";
import { validFilters } from './filter.actions';
import * as actions from './filter.actions';

export const initialState = "all";

const _counterReducer = createReducer(initialState,
  on(actions.setFilter, (state, {filter}) => filter)
)

export function filterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
