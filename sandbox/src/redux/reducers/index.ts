import { combineReducers } from 'redux';
import { awesomeness_reducer } from './awesomeness.reducer';
import { sandbox_reducer } from './sandbox.reducers';

export const rootReducer = combineReducers({
  awesomeness: awesomeness_reducer,
  sandbox: sandbox_reducer
});

export type RootState = ReturnType<typeof rootReducer>;