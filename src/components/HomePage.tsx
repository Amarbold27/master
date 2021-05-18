import React, { Component,MouseEvent } from 'react';
import { useSelector,useDispatch } from "react-redux";
import Button from './CounterButton';
import {AppState} from '../store/rootStore'
import { AppActions } from '../store/models/actions';
import { decrementCount, incrementCount } from '../store/counter/CounterAction';

export default function HomePage() {
  const count = useSelector<AppState,number>(state=> state.counterReducer.count);
  const status = useSelector<AppState, boolean>(state => state.toggleReducer.click);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(incrementCount())
  }
  const handleClick1 = () => {
    dispatch(decrementCount())
 }
  return (
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem' }}>
      <span>{count}</span>
        <button onClick={handleClick} color={'lightgreen'}>
          Increment
        </button>
        <button onClick={handleClick1} color={'orange'}>
        Decrement
        </button>
      <p></p>
      </div>
    );
}
