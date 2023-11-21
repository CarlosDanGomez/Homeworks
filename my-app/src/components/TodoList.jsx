import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onRemove, onToggleDone }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  );
};