import React, { useState } from "react";

const Counter = () => {
  const [numder, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  const style = {
    border: "1px solid black",
    padding: "3px",
    margin: "2px",
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
