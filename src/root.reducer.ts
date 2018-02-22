import { combineReducers, Reducer } from 'redux';
import { dataReducer, viewReducer } from './features/sign-up';

export const rootReducer: Reducer<ModuleStore> = combineReducers({
  viewReducer,
  dataReducer
});
