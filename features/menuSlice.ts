import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  value: boolean;
}

const initialState: MenuState = {
  value: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle(state) {
      state.value = !state.value;
    },
  },
});

export const { toggle } = menuSlice.actions;
export default menuSlice.reducer;
