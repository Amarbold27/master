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

    switch (action.type) {
      case TOGGLE:
       return {
         ...state, click: !state.click
       }
      default:
        return state;
    }
  };
  