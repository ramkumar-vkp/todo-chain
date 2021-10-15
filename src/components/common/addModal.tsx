import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addTask, deleteTask, updateTask } from "@/store/slices/taskSlice";
interface Props {
  showModal: boolean;
  setshowModal: any;
}
interface TaskState {
  taskId?: number;
  name: string;
  label: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  subTasks?: Array<string>;
  dateCreated: string;
}

const AddModal: React.FC<Props> = ({ showModal, setshowModal }) => {
  const dispatch = useDispatch();
  const dropin = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
    exit: { y: "-100vh", opacity: 0 },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let taskName = event.target.taskName.value;
    let taskLabel = event.target.taskLabel.value;
    let startTime = event.target.startTime.value;

    let task: TaskState = {
      name: taskName,
      label: taskLabel,
      startTime: startTime,
      dateCreated: new Date().toString(),
    };
    dispatch(addTask(task));
    console.log(
      `taskName : ${taskName}, taskLabel : ${taskLabel}, startTime : ${startTime}`
    );
    setshowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
          <motion.div
            variants={dropin}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gray-500 p-5 md:w-3/4 lg:w-1/3 mx-auto rounded-3xl "
          >
            <form onSubmit={handleSubmit}>
              <div className="flex items-center mb-2">
                <label
                  htmlFor="taskName"
                  className="inline-block w-20 mr-6 text-right 
                                 font-sans text-gray-300"
                >
                  TaskName
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="name"
                  placeholder="Enter The Task"
                  className="bg-gray-500 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-200 placeholder-gray-400
                      outline-none"
                />
              </div>

              <div className="flex items-center mb-2">
                <label
                  htmlFor="taskLabel"
                  className="inline-block w-20 mr-6 text-right
                                    font-sans text-gray-300"
                >
                  Label
                </label>
                <input
                  type="text"
                  id="taskLabel"
                  name="label"
                  placeholder="Task Label"
                  className="bg-gray-500 flex-1 py-2 border-b-2 border-gray-400  focus:border-green-400 outline-none
                      text-gray-200
                      placeholder-gray-400"
                />
              </div>

              <div className="flex items-center mb-2">
                <label
                  htmlFor="startTime"
                  className="inline-block w-20 mr-6 text-right
                                    font-sans text-gray-300"
                >
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="time"
                  placeholder="Start Time"
                  className="bg-gray-500 flex-1 py-2 border-b-2 border-gray-400  focus:border-green-400 outline-none
                      text-gray-200
                      placeholder-gray-400"
                />
              </div>

              <div className="text-right flex flex-row justify-end mt-4">
                <button
                  className="py-2 px-4 bg-gray-400 text-white font-mono text-lg rounded-2xl mr-2"
                  type="button"
                  onClick={() => setshowModal(false)}
                >
                  Close
                </button>
                <button
                  className="py-2 px-4 bg-green-400 text-white font-mono text-lg rounded-2xl"
                  type="submit"
                >
                  Add Task
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddModal;
