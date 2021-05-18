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
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, count: state.count + 1}
    case DECREMENT_COUNTER:
      return {...state, count: state.count - 1}
    default:
      return state;
  }
};
