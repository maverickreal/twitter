import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RegisterSlice";


export const Store = configureStore({
    reducer: {
        register: reducer
    }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;