import { useState } from "react";

export default function NavBar({ user, darkMode, setdarkMode }) {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-300 dark:bg-gray-700 border-b-4 border-yellow-600">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between p-2">
          <div className="flex space-x-2 items-center">
            <div className="flex space-x-1 mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700 dark:text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-700 dark:text-yellow-500">
                ToDo-Chain
              </span>
            </div>

            <div className="hidden md:flex space-x-6">
              <a
                href=""
                className="text-gray-700 dark:text-yellow-500 hover:text-blue-600 dark:hover:text-yellow-200"
              >
                Features
              </a>
              <a
                href=""
                className="text-gray-700 dark:text-yellow-500 hover:text-blue-600 dark:hover:text-yellow-200"
              >
                Pricing
              </a>
              <a
                href=""
                className="text-gray-700 dark:text-yellow-500 hover:text-blue-600 dark:hover:text-yellow-200"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <svg
              onClick={() => {
                console.log(`Before : Dark Mode : ${darkMode}`);
                setdarkMode(darkMode === "light" ? "dark" : "light");
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-600 dark:text-yellow-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-500 transition duration-300">
              Logout
            </div>
          </div>

          <div
            className="md:hidden"
            onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </div>
        </div>
      </div>

      {/*mobile menu*/}
      <div
        className={(isMobileMenuOpen ? "block" : "hidden") + " md:hidden py-2"}
      >
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-200 dark:text-yellow-500"
        >
          Features
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-200 dark:text-yellow-500"
        >
          Pricing
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-200 dark:text-yellow-500"
        >
          Blog
        </a>
        <div className="flex space-x-4 items-center justify-between mx-3.5">
          <svg
            onClick={() => {
              console.log(`Before : Dark Mode : ${darkMode}`);
              setdarkMode(darkMode === "light" ? "dark" : "light");
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-600 dark:text-yellow-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-500 transition duration-300">
            Logout
          </div>
        </div>
      </div>
    </nav>
  );
}
