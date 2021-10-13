export default function Task() {
  return (
    <div className="py-5">
      <div className="flex flex-row">
        <div className="pr-7 flex-none">
          <div className="bg-gray-300 rounded-xl w-24 px-3 ring-4 ring-gray-900 ring-inset font-semibold">
            09:30 AM
          </div>
        </div>
        <div className="flex-none">
          <div className="flex flex-row bg-gray-300 rounded-xl ring-4 ring-yellow-500">
            <div className="px-3">
              This is a testing task This is a testing task This is a testing
              task
            </div>
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
      </div>
      <div className="border-t-4 border-yellow-500 -mt-3 w-40" />
    </div>
  );
}
