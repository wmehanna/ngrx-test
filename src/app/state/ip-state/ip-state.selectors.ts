import { IP_KEY } from './ip-state.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectIpState = createFeatureSelector<AppState>(IP_KEY);

export const selectIpLoad = createSelector(selectIpState, (state: AppState) => state);
