import { createAction, props } from '@ngrx/store';

export const setSelectedValue = createAction(
  '[Radio Button] Set Selected Value',
  props<{ value: string }>()
);

export const getSelectedValue = createAction(
    '[Radio Button] G et Selected Value',
    props<{ value: string }>()
  );