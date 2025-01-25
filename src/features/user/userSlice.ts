import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { user } from "./types";

const initialState = {
    login: "",
    password: "",
    auth: false,
};

const tasksSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<user>) => {
            state.login = action.payload.login;
            state.password = action.payload.password;
            state.auth = true;
        },
        exit: (state) => {
            state.login = "";
            state.password = "";
            state.auth = false;
        },
    },
});

export const { login, exit } = tasksSlice.actions;

export default tasksSlice.reducer;
