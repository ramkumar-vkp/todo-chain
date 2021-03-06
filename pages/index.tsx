import Head from "next/head";
import Task from "@components/home/taskComponent";
import Add from "@components/home/addComponent";
import React, { useState, useEffect } from "react";
import AddModal from "@/components/common/addModal";
import { testdb } from "@/utils/dbutils";
import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "@/components/home/NavBar";

export async function getServerSideProps(context) {
  testdb();
  return {
    props: {},
  };
}

const Home: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setdarkMode] = useState("");

  useEffect(() => {
    if (darkMode == "dark") {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      console.log(
        `Changing the html page to dark theme : ${localStorage.theme}`
      );
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      console.log(
        `Changing the html page to light theme : ${localStorage.theme}`
      );
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
        <div className="w-16 h-16 border-b-2 border-yellow-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center bg-gray-300">
        <div className="p-2 text-lg font-mono">{error.message}</div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="bg-gray-300 h-screen w-full dark:bg-gray-800">
        <Head>
          <title>ToDo Chain</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar user={user} darkMode={darkMode} setdarkMode={setdarkMode} />

        {/* <div className="h-11 w-full bg-yellow-600">
          <div className="flex flex-row justify-between">
            <div className="px-2 py-1 m-2 bg-gray-300 rounded-md cursor-pointer text-gray-800 text-sm font-mono uppercase">
              ToDo Chain
            </div>
            <div className="px-2 py-1 m-2 bg-gray-300 rounded-md cursor-pointer text-gray-800 text-sm font-mono ">
              Welcome "{user.name}" email "{user.email}"
            </div>
            <div className="px-2 py-1 m-2 bg-gray-300 rounded-md cursor-pointer text-gray-800 text-sm font-mono uppercase">
              <a href="/api/auth/logout">Logout</a>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col">
          <div className="bg-gray-300 dark:bg-gray-800">
            <div className="flex-grow border-l-4 border-yellow-600 ml-28">
              <div className="-ml-28 pb-20">
                <Task />
              </div>
            </div>
            <div onClick={() => setShowModal(true)}>
              <Add />
            </div>
          </div>
        </div>

        <AddModal showModal={showModal} setshowModal={setShowModal} />
      </div>
    );
  } else {
    return (
      <>
        <div className="flex h-screen w-full bg-gray-700">
          <Head>
            <title>ToDo Chain</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex h-12 w-full justify-between bg-yellow-500">
            <div className="px-2 py-1 m-2 bg-gray-700 rounded-md cursor-pointer text-yellow-500 text-lg font-mono">
              ToDo Chain
            </div>
            <div className="px-2 py-1 m-2 bg-gray-700 rounded-md cursor-pointer">
              <a
                href="/api/auth/login"
                className="text-yellow-500 text-lg font-mono"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Home;
