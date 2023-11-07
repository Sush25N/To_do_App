import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodoText: (state, action) => {
      // Update the text of a todo item based on the provided ID
      const { id, text } = action.payload;
      const todoToUpdate = state.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodoText } = todoSlice.actions;
export default todoSlice.reducer;
