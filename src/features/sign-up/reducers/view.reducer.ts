import { Reducer } from 'redux';
import { NEXT_VIEW } from '../actions/data';

export const viewReducer: Reducer<ViewState> =
  (
    state: ViewState = { viewIndex: 1 },
    action: { type: string }): { viewIndex: number } => {
    if (action.type === NEXT_VIEW && state.viewIndex < 4) {
      state.viewIndex = state.viewIndex + 1;
    }
    return { ...state };
  };
