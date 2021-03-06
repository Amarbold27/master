import {
  CounterActionTypes,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from './CounterAction';


import { Action, Reducer } from 'redux';
export interface Counter {
  count: number;
}
const defaultState: Counter = {
  count: 0,
};

export const counterReducer: Reducer<Counter, Action> = (
  state = defaultState,
  action: CounterActionTypes
) => {
  const nextState = {
    count: state.count,
  };
  switch (action.type) {
    case INCREMENT_COUNTER:
      nextState.count = state.count + 1;
      return nextState;
    case DECREMENT_COUNTER:
      nextState.count = state.count - 1;
      return nextState;
    default:
      return state;
  }
};
