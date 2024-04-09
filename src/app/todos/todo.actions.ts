import { createAction, props } from "@ngrx/store";

export const create = createAction(
  '[TODO] Create Todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editing = createAction(
  '[TODO] Editing Todo',
  props<{ id: number, text: string }>()
);

export const exclude = createAction(
  '[TODO] Exclude Todo',
  props<{ id: number }>()
);

export const excludeCompleted = createAction(
  '[TODO] Exclude Completed Todo'
);

export const toggleAll = createAction(
  '[TODO] Toggle All Todo',
  props<{ completed: boolean }>()
);
