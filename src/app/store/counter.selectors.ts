import { createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: number }) => state.counter;
// export const selectDoubleCount = (state: { counter: number }) => state.counter * 2;
// or we can use another efficient way
export const selectDoubleCount = createSelector(
  selectCount,
  (state) => state * 2
);
