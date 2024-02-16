import { Action, createAction, props } from '@ngrx/store';

export const init = createAction(
    '[Counter] Init',

)
export const set = createAction(
    '[Counter] Set',
    props<{value:number}>()
)



export const increment = createAction(
    '[Counter] Increment',
    props<{value:number}>()
)
export const decrement = createAction(
    '[Counter] Decrement',
     props<{value:number}>()
)
export const reset = createAction(
    '[Counter] Reset',
    props<{value:number}>()

)

//we can use an alternative way to implement Action

// export const increment = '[Counter] Increment'
// export const decrement = '[Counter] Decrement'
// export const reset = '[Counter] Reset'

// export class IncrementAction implements Action {
// //   readonly type: string = '[Counter] Increment';
//   readonly type: string =  increment;

//   constructor(public value: number) {}
// }

// export class DecrementAction implements Action {
// //   readonly type: string = '[Counter] Decrement';
//   readonly type: string = decrement;


//   constructor(public value: number) {}
// }
// export class ResetAction implements Action {
//   readonly type: string = reset;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction | DecrementAction | ResetAction