import { motion } from "framer-motion";

export default function Add() {
  return (
    <motion.div
      whileHover={{ scale: 1.5 }}
      className="fixed bottom-10 right-10 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </motion.div>
  );
}
