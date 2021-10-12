import { useState, useEffect } from "react";

export default function Home() {
  const [time, settime] = useState("");

  setInterval(() => settime(new Date().toString()), 1000);

  return (
    <>
      <h1>Hello World!</h1>
      <div>{time}</div>
    </>
  );
}
