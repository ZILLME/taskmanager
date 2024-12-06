import { createSlice } from '@reduxjs/toolkit';

interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
