/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function FetchButton({ initialCounter, onFetch }) {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    if (counter) {
      onFetch(counter);
    }
  }, [counter]);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h4>Current Id: {counter}</h4>
      <button type="button" onClick={increaseCounter}>
        Fetch a new Country
      </button>
    </div>
  );
}

FetchButton.propTypes = {
  initialCounter: PropTypes.number.isRequired,
  onFetch: PropTypes.func.isRequired
};

export default FetchButton;
