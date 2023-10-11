import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoReducer } from "./TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false
  }
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo
    };
    dispatch(action);
  };

  const handleRemoveTodo = (todoId) => {
    const action = {
      type: "[TODO] REMOVE TODO",
      payload: todoId
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp, <small>pendientes:</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7"></div>
        <TodoList todos={todos} onRemove={handleRemoveTodo} />
      </div>
      <div className="col-5">
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
