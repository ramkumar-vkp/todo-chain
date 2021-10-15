import { motion, AnimatePresence } from "framer-motion";
import { start } from "repl";

interface Props {
  showModal: boolean;
  setshowModal: any;
}

const AddModal: React.FC<Props> = ({ showModal, setshowModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let taskName = event.target.taskName.value;
    let taskLabel = event.target.taskLabel.value;
    let startTime = event.target.startTime.value;

    console.log(
      `taskName : ${taskName}, taskLabel : ${taskLabel}, startTime : ${startTime}`
    );
    setshowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
          <div className="bg-gray-500 p-5 md:w-3/4 lg:w-1/3 mx-auto rounded-3xl ">
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

              <div className="text-right">
                <button
                  className="py-3 px-8 bg-green-400 text-white font-mono text-lg rounded-2xl"
                  type="submit"
                >
                  ADD TASK
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddModal;
