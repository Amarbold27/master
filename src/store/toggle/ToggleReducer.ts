import {
    ToggleActionTypes,
    TOGGLE
  } from './ToggleAction';
  
  
  import { Action, Reducer } from 'redux';
  export interface Toggle {
    click: boolean;
  }
  const defaultState: Toggle = {
    click: true,
  };
  
  export const toggleReducer: Reducer<Toggle, Action> = (
    state = defaultState,
    action: ToggleActionTypes
  ) => {
    const nextState = {
      click: state.click,
    };
    switch (action.type) {
      case TOGGLE:
        nextState.click = !state.click ;
        return nextState;
      default:
        return state;
    }
  };
  