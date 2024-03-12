// usersSlice.js (Redux slice)
import { createSlice } from '@reduxjs/toolkit';

let nextId = 1;
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  reducers: {
    add: (state, action) => {
      const user = {
        ...action.payload,
        id: nextId++,
      };
      return {
        ...state,
        data: [...state.data, user],
      };
    },
    remove: (state, action) => {
      state.data = state.data.filter(user => user.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, newData } = action.payload;
      const index = state.data.findIndex(user => user.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...newData };
      }
    },
  },
});

export const { add, remove, edit } = usersSlice.actions;

export default usersSlice.reducer;
