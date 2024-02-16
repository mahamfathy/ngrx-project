import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 0;
export const countReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);
//or I can use another way:
// export function countReducer(state = initialState){
//     return state
// }
