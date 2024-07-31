import { createSelector,createFeatureSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appStates.interface";
import { counterStateInterface } from "src/app/types/counterState.interface";

//export const selectFeature=(state:AppStateInterface)=>state.counter;
export const selectFeature = createFeatureSelector<counterStateInterface>('counter');

export const selectInitialCounter = createSelector(
    selectFeature,
    (state) => state.counter
);

export const selectDisableInitial = createSelector(
    selectFeature,
    (state) => state.disableInitial
);

export const selectSetText = createSelector(
    selectFeature,
    (state) => state.text
);

