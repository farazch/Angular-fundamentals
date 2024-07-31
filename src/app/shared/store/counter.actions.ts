import { createAction,props } from "@ngrx/store";

export const increment = createAction("increment")
export const decrement = createAction("decrement")
export const reset = createAction("reset")
export const incrementtenn = createAction("incrementten",props<{ value:any }>())
export const setInitialValue = createAction("setInitialValue",props<{ value:number }>())
export const disableInitial = createAction("disableInitial",props<{ value:boolean }>())
export const setText = createAction("setText",props<{ value:string,helper:{id:number,name: string} }>())