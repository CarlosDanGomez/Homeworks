import logo from './logo.svg';
import './App.css';
import Prototypes from 'prop-types';
import React, { useState } from 'react';

const FirstApp = ( {value} ) => {
  const [val, setVal] = useState(value);
  const counterUp = () => {
    setVal(val + 1);
    console.log(val);
  };

  return (
    <>
      <h1>Challenge 4</h1>
      <span>10</span>
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
  value: 0,
};

export default FirstApp;