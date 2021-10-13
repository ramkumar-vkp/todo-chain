import Head from "next/head";
import Task from "@components/home/taskComponent";
import Add from "@components/home/addComponent";
import React, { useState } from "react";
import AddModal from "@/components/common/addModal";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

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
};

export default Home;
