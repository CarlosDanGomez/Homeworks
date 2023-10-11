import React from "react";

export const TodoItem = ({ todo, onRemove, onToggleDone }) => {
  const handleRemove = () => {
    onRemove(todo.id);
  };

  const handleToggleDone = () => {
    onToggleDone(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${todo.done ? "completed" : "not-completed"}`}
        onClick={handleToggleDone}
      >
        {todo.description}
      </span>
      <button className="btn btn-warning" onClick={handleToggleDone}>
        Hecho?
      </button>
      <button className="btn btn-danger" onClick={handleRemove}>
        Borrar
      </button>
    </li>
  );
};