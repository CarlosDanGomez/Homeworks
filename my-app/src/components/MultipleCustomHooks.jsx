import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { counter, add } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  return (
    <>
      <h1>MultipleCustomHook</h1>
      <hr />
      {isLoading ? (
        <div className="aler alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquuote text-end">
          <p className="mb-1">"{data[0]?.quote}"</p>
          <footer className="blockquote-footer">-{data[0]?.author}.</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={() => add()}>
        Next Quote
      </button>
        
    </>
  );
};
