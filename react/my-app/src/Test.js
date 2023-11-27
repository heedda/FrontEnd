import React from "react";
import { useState } from "react";

const Test = () => {
  const [use, setUse] = useState(0);
  return <div>{use}</div>;
};

export default Test;
