import { combineReducers } from 'redux';
import { awesomeness_reducer } from './awesomeness.reducer';

export const rootReducer = combineReducers({
  awesomeness: awesomeness_reducer
});

export type RootState = ReturnType<typeof rootReducer>;