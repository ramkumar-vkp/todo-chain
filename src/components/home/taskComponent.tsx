import { RootState } from "@/store/store";
import { motion } from "framer-motion";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  completeTask,
  deleteTask,
  updateTask,
} from "@/store/slices/taskSlice";
interface TaskProps {
  showModal: boolean;
  setshowModal: Dispatch<SetStateAction<boolean>>;
}

const Task: React.FC = () => {
  const dispatch = useDispatch();
  let tasks = useSelector((state: RootState) => state.task);
  console.log(`Tasks : ${JSON.stringify(tasks)}`);

  const onDelete = (key) => {
    console.log(`Deleting Task : ${key}`);
    dispatch(deleteTask(key));
  };

  const onComplete = (key) => {
    console.log(`Completing Task : ${key}`);
    dispatch(completeTask(key));
  };

  return (
    <>
      {tasks.map((task, key) => (
        <div className="pl-4 pt-8">
          <div className="flex flex-row">
            <div className="pr-16 flex-none">
              <div className="bg-gray-300 rounded-xl w-16 px-3 ring-4 ring-gray-900 ring-inset font-semibold">
                {task.startTime}
              </div>
            </div>
            <motion.div
              className="flex-none"
              whileHover={{ scale: 1.5, originX: 0 }}
            >
              <div
                className={`flex flex-row bg-gray-300 rounded-xl ring-4 ring-red-800 ${
                  task.completed && `bg-gray-700`
                }`}
              >
                <div className="px-3">{task.name}</div>
                <div onClick={() => onDelete(task.taskId)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-red-600 mx-1 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div onClick={() => onComplete(task.taskId)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-600 mx-1 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="border-t-4 border-red-800 -mt-3 w-40" />
        </div>
      ))}
    </>
  );
};

export default Task;
