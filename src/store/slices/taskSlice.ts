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
  initialState: [
    {
      taskId: 1,
      name: "Task 1",
      label: "",
      startTime: "Wed Oct 13 2021 14:21:21 GMT+0530 (India Standard Time)",
      dateCreated: "",
    },
    {
      taskId: 2,
      name: "Task 2",
      label: "",
      startTime: "Wed Oct 13 2021 14:22:22 GMT+0530 (India Standard Time)",
      dateCreated: "",
    },
    {
      taskId: 3,
      name: "Task 3",
      label: "",
      startTime: "Wed Oct 13 2021 14:23:23 GMT+0530 (India Standard Time)",
      dateCreated: "",
    },
    {
      taskId: 4,
      name: "Task 4",
      label: "",
      startTime: "Wed Oct 13 2021 14:24:24 GMT+0530 (India Standard Time)",
      dateCreated: "",
    },
    {
      taskId: 5,
      name: "Task 5",
      label: "",
      startTime: "Wed Oct 13 2021 14:25:25 GMT+0530 (India Standard Time)",
      dateCreated: "",
    },
    {
      taskId: 6,
      name: "Task 6",
      label: "",
      startTime: "Wed Oct 13 2021 14:26:26 GMT+0530 (India Standard Time)",
      dateCreated: "",
    },
  ],
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
