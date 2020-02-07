import React, { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";

import { counterContext } from "../context/counterContext";

import Nested from './Nested';

const COLOR_RED = "red";
const COLOR_BLUE = "blue";
const COLOR_GREEN = "green";

const colors = {
  [COLOR_RED]: COLOR_RED,
  [COLOR_BLUE]: COLOR_BLUE,
  [COLOR_GREEN]: COLOR_GREEN
};

function StateExample({ initialText, initialCounter, textColor }) {
  const NumberInputRef = useRef();
  const [counterState, setCounterState] = useContext(counterContext);

  console.log("The counter Context", counterState);

  const [text, setText] = useState(initialText);
  // const [counter, setCounter] = useState(initialCounter);

  function handleOnChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function handleOnBlur(e) {
    const { value } = e.target;
    setText(value.trim());
  }

  function handleSubstract() {
    const { current } = NumberInputRef;
    const numberValue = current.valueAsNumber;
    const value = Number.isNaN(numberValue) ? 0 : numberValue;

    // setCounter(counter - value);
    setCounterState(counterState - value)
  }

  function handleAdd() {
    const { current } = NumberInputRef;
    const numberValue = current.valueAsNumber;
    const value = Number.isNaN(numberValue) ? 0 : numberValue;

    // setCounter(counter + value);
    setCounterState(counterState + value)
  }

  return (
    <div>
      <h4 className={colors[textColor] || ""}>
        The value of the text is: {text || "NO VALUE"}
      </h4>
      <input
        type="text"
        value={text}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      {/* <h4>The value of the counter is: {counter}</h4> */}
      <h4 className="red">The value of the context counter is: {counterState}</h4>
      <button type="button" onClick={handleSubstract}>
        Substract
      </button>
      <input type="number" ref={NumberInputRef} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <Nested />
    </div>
  );
}

StateExample.propTypes = {
  initialText: PropTypes.string,
  initialCounter: PropTypes.number,
  textColor: PropTypes.oneOf([COLOR_RED, COLOR_BLUE, COLOR_GREEN])
};

StateExample.defaultProps = {
  initialText: "",
  initialCounter: 0,
  textColor: ""
};

export default StateExample;
