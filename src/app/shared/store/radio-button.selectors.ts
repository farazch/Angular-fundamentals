import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RadioButtonState } from './radio-button.state';

export const selectRadioButtonState = createFeatureSelector<RadioButtonState>('radioButton');

export const selectSelectedValue = createSelector(
  selectRadioButtonState,
  (state: RadioButtonState) => state.selectedValue
);