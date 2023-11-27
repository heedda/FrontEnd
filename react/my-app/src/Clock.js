import React from "react";


const Clock = () => {
  return (
    <div>
      <div>{new Date().toLoclaeTimeString()}</div>
    </div>
  );
};

export default Clock;
