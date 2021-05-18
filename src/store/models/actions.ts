import { CounterActionTypes } from '../counter/CounterAction';
import { ToggleActionTypes } from '../toggle/ToggleAction';
export type AppActions = CounterActionTypes | ToggleActionTypes; // | TodoActionTypes
