import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./slices/RegisterSlice";

export const Store = configureStore({
    reducer: { register: registerSlice },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
