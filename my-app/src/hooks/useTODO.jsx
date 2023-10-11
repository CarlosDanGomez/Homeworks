import { useReducer } from "react";
import { TodoReducer } from "../components/TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

export const useTODO = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatch(action);
  };

  const handleRemoveTodo = (todoId) => {
    const action = {
      type: "[TODO] REMOVE TODO",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggleDone = (todoId) => {
    const action = {
      type: "[TODO] TOGGLE DONE",
      payload: todoId,
    };
    dispatch(action);
  };

  const countTodos = () => {
    return todos.length;
  };

  const countPendingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleDone,
    countTodos,
    countPendingTodos,
  };
};