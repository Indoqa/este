import * as actions from './actions';
import {Record} from 'immutable';

const InitialState = Record({
  time: null
});
const initialState = new InitialState;

export default function homeReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);

  switch (action.type) {

    case actions.UPDATE_TIME_START: {
      return state.set('time', 'Fetching time.');
    }

    case actions.UPDATE_TIME_SUCCESS: {
      console.log(action.payload);
      const {time} = action.payload;
      return state.set('time', time.toString());
    }

    case actions.UPDATE_TIME_ERROR: {
      return state.set('time', 'Error fetching time: ' + action.payload.statusText);
    }

  }

  return state;
}
