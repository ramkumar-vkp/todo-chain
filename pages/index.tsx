import Head from "next/head";
import Task from "@components/home/taskComponent";
import Add from "@components/home/addComponent";
import React, { useState } from "react";
import AddModal from "@/components/common/addModal";
import { testdb } from "@/utils/dbutils";
import { useUser } from "@auth0/nextjs-auth0";

const Home: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [showModal, setShowModal] = useState(false);
  // if (typeof window === undefined) {
  //   testdb();
  // }

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
      <div className="bg-gray-900 h-full w-full">
        <Head>
          <title>Today's todo list</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col h-screen">
          <div className="bg-gray-900">
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
        {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
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
