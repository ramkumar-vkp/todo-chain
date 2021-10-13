import Head from "next/head";
import Task from "@components/home/taskComponent";
import Add from "@components/home/addComponent";

export default function Home() {
  return (
    <div className="bg-gray-900 w-full">
      <Head>
        <title>Today's todo list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-full max-w-full border-l-4 border-yellow-600 ml-28">
        <div className="flex flex-col -ml-28">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Add />
        </div>
      </div>

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
}
