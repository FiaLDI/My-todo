import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { taskState, task } from "./types";

const initialState: taskState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        createTask: (state, action: PayloadAction<task>) => {
            state.tasks = [...state.tasks, action.payload];
        },
        updateTask: (state, action: PayloadAction<task>) => {
            state.tasks = state.tasks.map((val) =>
                val.id === action.payload.id ? { ...val, ...action.payload } : val,
            );
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((val) => val.id !== action.payload);
        },
        toggleStatusTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.map((val) =>
                val.id === action.payload ? { ...val, completed: !val.completed } : val,
            );
        },
        setTasks: (state, action: PayloadAction<task[]>) => {
            state.tasks = action.payload;
        },
    },
});

export const {
    createTask,
    updateTask,
    removeTask,
    toggleStatusTask,
    setTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
