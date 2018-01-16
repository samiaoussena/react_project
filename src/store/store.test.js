import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as jobActions from '../actions/jobActions';

describe('Store', function() {
  it('Should handle creating jobs', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const job = {
      title: "Clean Code"
    };

    // act
    const action = jobActions.createjobSuccess(job);
    store.dispatch(action);

    // assert
    const actual = store.getState().jobs[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
