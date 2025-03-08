import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const intervalId = setInterval(() => {
      console.log("Updating count...");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Cleaning up previous interval...");
      clearInterval(intervalId); // Cleanup: Prevent multiple intervals
    };
  }, [running]); // 🔥 Runs again when `running` changes

  let genre = "romance";

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setRunning((prev) => !prev)}>
        {running ? "Stop" : "Start"} Timer
      </button>
    </div>
  );
};

export default Timer;
