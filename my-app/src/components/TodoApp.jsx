import React from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTODO } from "../hooks/useTODO";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleDone,
    countTodos,
    countPendingTodos,
  } = useTODO();

  return (
    <>
      <h1>
        TodoApp,<div><small>total todos: {countTodos()}, pendientes: {countPendingTodos()}</small></div>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7"></div>
        <TodoList todos={todos} onRemove={handleRemoveTodo} onToggleDone={handleToggleDone} />
      </div>
      <div className="col-5">
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};