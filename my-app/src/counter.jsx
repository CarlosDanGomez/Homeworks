import { useCounter } from "./hooks/useCounter";
export const Counter = ({ value }) => {
  const { counter, add, sub, reset } = useCounter(value);

  return (
    <>
      <h1> Counter </h1>
      <span> {counter} </span>
      <button onClick={() => add()}> +1 </button>
      <button onClick={() => sub()}> -1 </button>
      <button onClick={() => reset()}> reset </button>
      <img src='https://media.tenor.com/7x4wdZSCH8wAAAAC/the-voices-abatukam.gif'></img>
    </>
  );
};

export default Counter;
