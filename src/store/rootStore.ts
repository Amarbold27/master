import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { counterReducer } from './counter/CounterReducer';
import {toggleReducer} from './toggle/ToggleReducer';
const logger = createLogger();

export const rootReducer = combineReducers({ counterReducer,toggleReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(logger));
