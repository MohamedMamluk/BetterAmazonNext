import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../features/menuSlice';

const store = configureStore({
  reducer: { menu: menuSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
