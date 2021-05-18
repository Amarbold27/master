import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, useAppDispatch, useAppSelector } from "../store/rootStore";
import { decrementCount, incrementCount } from "../store/counter/CounterAction";

export default function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.count);
  const status = useAppSelector((state) => state.toggleReducer.click);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(incrementCount());
  };
  const handleClick1 = () => {
    dispatch(decrementCount());
  };
  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontSize: "2rem" }}>
      <span>{count}</span>
      <button onClick={handleClick} color={"lightgreen"}>
        Increment
      </button>
      <button onClick={handleClick1} color={"orange"}>
        Decrement
      </button>
      <p></p>
    </div>
  );
}
