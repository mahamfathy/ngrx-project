import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { countReducer } from '../store/counter.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
counter:countReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
