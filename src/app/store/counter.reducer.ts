import { Action, createReducer, on } from '@ngrx/store';
import {
  // DecrementAction,
  // IncrementAction,
  decrement,
  increment,
  reset,
  set,
} from './counter.actions';
// import { decrement, increment, reset } from '../store/counter.actions';

const initialState = 0;
export const countReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(reset, (state) => (state = 0)),
  on(set, (state, action) => action.value)
);

// or I can use another way:
// export function countReducer(
//   state = initialState,
//   action: IncrementAction | Action
// ) {
//   if (action.type === increment) {
//     return state + (<IncrementAction>action).value;
//   } else if (action.type === decrement) {
//     return state - (action as DecrementAction).value;
//   } else if (action.type === reset) {
//     return (state = 0);
//   }
//   return state;
// }
