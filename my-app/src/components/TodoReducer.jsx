export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "[TODO] ADD TODO":
      return [...state, action.payload];
    case "[TODO] REMOVE TODO":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
