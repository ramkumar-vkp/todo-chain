interface TaskState {
  taskId: number;
  name: string;
  label: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  subTasks?: Array<string>;
  dateCreated: string;
}

let tasks: TaskState[] = [];

function addTask(task: TaskState) {
  tasks.push(task);
}

function deleteTask(task: TaskState) {
  let index: number = tasks.findIndex((t) => t.taskId === task.taskId);
  tasks.splice(index, 1);
}

function updateTask(task: TaskState) {
  let index: number = tasks.findIndex((t) => t.taskId === task.taskId);
  tasks[index] = task;
}

export {};
addTask({
  taskId: 1,
  name: "Task1",
  label: "Home",
  startTime: "12",
  dateCreated: "2021",
});
addTask({
  taskId: 2,
  name: "Task2",
  label: "Home",
  startTime: "12",
  dateCreated: "2021",
});
addTask({
  taskId: 3,
  name: "Task3",
  label: "Home",
  startTime: "12",
  dateCreated: "2021",
});
addTask({
  taskId: 4,
  name: "Task4",
  label: "Home",
  startTime: "12",
  dateCreated: "2021",
});
addTask({
  taskId: 5,
  name: "Task5",
  label: "Home",
  startTime: "12",
  dateCreated: "2021",
});
console.log(`Test : ${JSON.stringify(tasks)}`);

deleteTask({
  taskId: 3,
  name: "Task5",
  label: "Home",
  startTime: "12",
  dateCreated: "2021",
});
console.log(`After Deletion : ${JSON.stringify(tasks)}`);

updateTask({
  taskId: 2,
  name: "Task55",
  label: "Home",
  startTime: "12",
  dateCreated: "2021",
});
console.log(`After Deletion : ${JSON.stringify(tasks)}`);
