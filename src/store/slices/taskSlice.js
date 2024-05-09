import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, e) => {
      state.push(e.payload);
    },
    deleteTask: (state, e) => {
      return state.filter(item => item.id !== e.payload)
    },
    updateTask: (state, e) => {
      return state = e.payload
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;