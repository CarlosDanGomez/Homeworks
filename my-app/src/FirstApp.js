import logo from './logo.svg';
import './App.css';
import Prototypes from 'prop-types';
import React, { useState } from 'react';

export const FirstApp = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategori] = useState([]);
  const handleEvent = (e) => {
    setCategory(e.target.value);
  };
  const AddCategory = () => {
    setCategori((list) => [...list, category]);
    setCategory("");
  };
  return (
    <>
      <h1>Challenge 5 Categorias</h1>
      <input
        type="text"
        value={category}
        onChange={(event) => handleEvent(event)}
      />
      <button onClick={() => AddCategory()}>Añadir categoria</button>
      <div>
        {categories.map((category) => {
          return <li> {category} </li>;
        })}
      </div>
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