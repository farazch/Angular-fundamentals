// import { createReducer, on } from '@ngrx/store';
// import { setSelectedValue } from './radio-button.actions';
// // import { initialRadioButtonState } from './radio-button.state';
// import { initialRadioButtonState } from './radio-button.state';
// const _radioButtonReducer = createReducer(
//   initialRadioButtonState,
//   on(setSelectedValue, (state, { value }) => ({
//     ...state,
//     selectedValue: value
//   }))
// );

// export function radioButtonReducer(state:any, action:any) {
//   return _radioButtonReducer(state, action);
// }

import { createReducer, on } from '@ngrx/store';
import { setSelectedValue,getSelectedValue } from './radio-button.actions';
import { initialRadioButtonState, RadioButtonState } from './radio-button.state';

// Load initial state from localStorage
//const storedValue = localStorage.getItem('selectedRadioValue');

// const initialState: RadioButtonState = {
//   ...initialRadioButtonState,
//   selectedValue: storedValue ? storedValue : initialRadioButtonState.selectedValue
// };

const _radioButtonReducer = createReducer(
    initialRadioButtonState,
    on(setSelectedValue, (state, { value }) => ({
      ...state,
      selectedValue: value
    }))
  );
export function radioButtonReducer(state: any, action: any) {
  return _radioButtonReducer(state, action);
}