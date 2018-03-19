import { dataReducer } from './data.reducer';
import { stateActions } from './../actions';
import { data } from './__mocks__/state.datareducer.mock';

describe('testing data reducer', () => {

  const initialState: Data = data;
  it('test action change name', () => {
    const expected: Data = {...data, name: 'Alexey'};

    expect(dataReducer(initialState, stateActions.onStateChange({ name: 'Alexey' }))).toEqual(expected);
  });

  it('test action change title', () => {
    const expected: Data = {...data, title: 'React'};

    expect(dataReducer(initialState, stateActions.onStateChange({ title: 'React' }))).toEqual(expected);
  });

  it('test action change surname, name', () => {
    const expected: Data = {...data, surname: 'Limarenko', name: 'Denis'};

    expect(dataReducer(initialState, stateActions.onStateChange({
       surname: 'Limarenko', name: 'Denis' }))).toEqual(expected);
  });

  it('test action change gender, resident', () => {
    const expected: Data = {...data, gender: '', resident: ''};

    expect(dataReducer(initialState, stateActions.onStateChange({
       gender: '', resident: '' }))).toEqual(expected);
  });
});
