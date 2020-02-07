import React, { useContext } from "react";

import { counterContext } from "../context/counterContext";

function ChildThree() {
  const [counterState, setCounterState] = useContext(counterContext);

  function handleOnChange(e) {
    setCounterState(e.target.valueAsNumber);
  }

  return (
    <div>
      Im the third in the family and the counter is <b>{counterState}</b>
      <input type="number" value={counterState} onChange={handleOnChange}  />
    </div>
  );
}

function ChildTwo() {
  return <ChildThree />;
}

function ChildOne() {
  return <ChildTwo />;
}

export default ChildOne;
