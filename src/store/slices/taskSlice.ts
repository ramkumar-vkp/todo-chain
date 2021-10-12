import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
  taskId: number;
  name: string;
  label: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  subTasks?: Array<string>;
  dateCreated: string;
}

const startState: TaskState = {
  taskId: 0,
  name: "",
  label: "",
  startTime: "",
  dateCreated: "",
};

export const taskSlice = createSlice({
  name: "task",
  initialState: [startState],
  reducers: {
    addTask: (state, action: PayloadAction<TaskState>) => {
      state.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<TaskState>) => {
      let index: number = state.findIndex(
        (t) => t.taskId === action.payload.taskId
      );
      state.splice(index, 1);
    },
    updateTask: (state, action: PayloadAction<TaskState>) => {
      let index: number = state.findIndex(
        (t) => t.taskId === action.payload.taskId
      );
      state[index] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
