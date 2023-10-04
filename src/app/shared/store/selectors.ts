import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appStates.interface";

export const selectFeature=(state:AppStateInterface)=>state.counter;

export const isloadingSelector = createSelector(
    selectFeature,
    (state) => state.loading
);