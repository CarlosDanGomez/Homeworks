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
      <h1>Counter</h1>
      <span>{val}</span>
      <button onClick={() => counterUp()}>+1</button>
      <img src='https://media.tenor.com/7x4wdZSCH8wAAAAC/the-voices-abatukam.gif'></img>
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