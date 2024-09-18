import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import assetsSlice from "./slices/assetsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    assets: assetsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
