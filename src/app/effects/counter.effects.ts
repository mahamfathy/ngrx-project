import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';
import { decrement, increment, reset } from '../store/counter.actions';
import { Store } from '@ngrx/store';
import { selectCount } from '../store/counter.selectors';

@Injectable()
export class CounterEffects {
  // in the previous ngrx version it was like but it is no longer supported
  // @Effect({dispatch:false})
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
          console.log(action);
          // localStorage.setItem('count', action.value.toString());
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}
