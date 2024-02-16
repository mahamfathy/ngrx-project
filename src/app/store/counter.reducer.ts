import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

const initialState = 0;
export const countReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => state = 0)
);
//or I can use another way:
// export function countReducer(state = initialState){
//     return state
// }
