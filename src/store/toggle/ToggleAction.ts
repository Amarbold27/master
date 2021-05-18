import { AppActions } from "../models/actions";

export const TOGGLE = 'TOGGLE';
interface ToggleClick {
  type: typeof TOGGLE;
}


export type ToggleActionTypes = ToggleClick;

export const toggleClick = (): AppActions => ({
  type: TOGGLE,
});

