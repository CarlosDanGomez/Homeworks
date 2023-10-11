import { useState } from "react";

export const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const counterAdd = () => {
    setCounter(counter + 1);
  };
  const counterSubstract = () => {
    setCounter(counter - 1);
  };
  const counterReset = () => {
    setCounter(value);
  };
  return {
    counter: counter,
    add: counterAdd,
    sub: counterSubstract,
    reset: counterReset
  };
};
