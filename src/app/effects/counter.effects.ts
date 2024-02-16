import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, tap, withLatestFrom } from 'rxjs/operators';
import {
  decrement,
  increment,
  init,
  reset,
  set,
} from '../store/counter.actions';
import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';
import { of } from 'rxjs';

@Injectable()
export class CounterEffects {
  // in the previous ngrx version it was like but it is no longer supported
  // @Effect({dispatch:false})
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(
          this.store.select(selectCount),
          this.store.select(selectDoubleCount)
        ),
        tap(([action, counter, selectDoubleCount]) => {
          console.log(action);
          // localStorage.setItem('count', action.value.toString());
          localStorage.setItem('count', counter.toString());
          localStorage.setItem('DoubleCount', selectDoubleCount.toString());
        })
      ),
    { dispatch: false }
  )

  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        if (storedCounter) {
          return of(set({ value: +storedCounter }));
        }
        return of(set({ value: 0 }));
      })
    )
  );
}
