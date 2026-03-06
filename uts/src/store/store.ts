import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./pageSlice";
import bookReducer from "./updateSlice"

export const store = configureStore({
    reducer : {
        auth: authReducer,
        post: postReducer,
        edit: bookReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch