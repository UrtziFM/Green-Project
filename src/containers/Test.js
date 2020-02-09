import React, { useState } from "react";

import StateExample from "../components/StateExample";

import { counterContext } from "../context/counterContext";

function Test() {
  const [counter, setCounter] = useState(1000);

  return (
    <div>
      <h3>Example of different hooks</h3>
      <counterContext.Provider value={[counter, setCounter]}>
        <StateExample textColor="green" />
      </counterContext.Provider>
    </div>
  );
}

export default Test;
