import { viewReducer } from './view.reducer';
import { stateActions } from './../actions';

describe('testing view reducer', () => {
  it('test view index', () => {
    const initialState: ViewState = { viewIndex: 1 };
    const expected: ViewState = { viewIndex: 2 };

    expect(viewReducer(initialState, stateActions.onViewChange())).toEqual(expected);
  });

  it('test if view index defined', () => {
    const initialState: ViewState = { viewIndex: 3};

    expect(viewReducer(initialState, stateActions.onViewChange())).toBeDefined();
  });

  it('test view if index > 4 to itinial state', () => {
    const initialState: ViewState = { viewIndex: 5};

    expect(viewReducer(initialState, stateActions.onViewChange())).toEqual(initialState);
  });

  it('when you dont care what a value is', () => {
    const initialState: ViewState = { viewIndex: -1};

    expect(viewReducer(initialState, stateActions.onViewChange())).toBeTruthy();
  });

});
