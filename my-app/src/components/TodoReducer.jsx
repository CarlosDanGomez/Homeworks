export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "[TODO] TOGGLE DONE":
      return state.map((todo) =>
    todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    case "[TODO] ADD TODO":
      return [...state, action.payload];
    case "[TODO] REMOVE TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
