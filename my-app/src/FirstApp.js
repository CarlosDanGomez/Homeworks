import logo from './logo.svg';
import './App.css';
import Prototypes from 'prop-types';
import React, { useState } from 'react';

const FirstApp = ( {value} ) => {
  const [val, setVal] = useState(value);
  const counterAdd = () => {
    setVal(val + 1);
    console.log(val);
  };
  const counterSubstract = () => {
    setVal(val - 1);
    console.log(val);
  };
  const counterReset = () => {
    setVal(10);
    console.log(val);
  };

  return (
    <>
      <h1>Counter</h1>
      <span>{val}</span>
      <button onClick={() => counterSubstract()}>+1</button>
      <button onClick={() => counterSubstract()}>-1</button>
      <button onClick={() => counterReset()}> reset </button>
    </>
  );
}

FirstApp.prototype = {
  title: Prototypes.string.isrequired,
  sum: Prototypes.number.isrequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  sum: 300,
  value: 10,
};

export default FirstApp;