import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const Counter = () => {
  const [numder, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  const style = {
    border: "1px solid black",
    padding: "3px",
    margin: "2px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1>{numder}</h1>
      <botton onClick={onIncrease} style={style}>
        +1
      </botton>
      <botton onClick={onDecrease} style={style}>
        -1
      </botton>
    </div>
  );
};

export default Counter;
