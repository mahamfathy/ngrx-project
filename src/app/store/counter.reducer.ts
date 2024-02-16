import { createReducer } from "@ngrx/store";

const initialState = 0;
// export const countReducer = createReducer(
//     initialState
// );
//or I can use another way:
export function countReducer(state = initialState){
    return state
}