import { useState, useEffect, useRef } from "react";
import Instruction from "./component/instruction";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [noCleanupCount, setNoCleanupCount] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalsRef = useRef<NodeJS.Timeout[]>([]);

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
  }, [running]);

  useEffect(() => {
    if (!running) return;
    const intervalId = setInterval(() => {
      console.log("Updating count...");
      setNoCleanupCount((prev) => prev + 1);
    }, 1000);
    intervalsRef.current.push(intervalId);
    //no cleanup function
  }, [running]);

  const resetTimer = () => {
    // Stop any running timers
    setRunning(false);

    // Clear all intervals that might be running (for the no-cleanup version)
    intervalsRef.current.forEach((intervalId) => {
      clearInterval(intervalId);
    });

    // Reset the intervals array
    intervalsRef.current = [];

    // Reset both counters
    setCount(0);
    setNoCleanupCount(0);
  };

  return (
    <div className="mt-10 p-6 w-full md:w-1/2 lg:max-w-md mx-auto my-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Counter Timer</h2>
      <Instruction>
        This component illustrates the importance of cleanup functions in
        React's
        <code className="bg-blue-100 px-1 rounded">useEffect</code>. <br />
        When you start the timer, both counters will begin updating every
        second.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li className="mb-2">
            <strong>Count (No Cleanup):</strong> Updates without clearing
            previous intervals. You will notice that the count never stops even
            after hitting the stop button. <br /> Also, the more you toggle the
            start/stop button the count starts to incement faster than the other
            counter.
          </li>
          <li>
            <strong>Count (With Cleanup):</strong> Properly clears the interval
            each time, ensuring only one interval is running.
          </li>
        </ul>
        Toggle the timer a few times and observe how the count values diverge
        due to the missing cleanup in one effect.
      </Instruction>

      <div className="flex gap-3">
        {/* Count without cleanup */}
        <div className="mb-4 w-1/2">
          <label
            htmlFor="no-cleanup-counter-display"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Count (No Cleanup):
          </label>
          <div
            id="no-cleanup-counter-display"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md bg-gray-50"
          >
            {noCleanupCount}
          </div>
        </div>

        {/* Count with cleanup */}
        <div className="w-1/2">
          <label
            htmlFor="cleanup-counter-display"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Count (With Cleanup):
          </label>
          <div
            id="cleanup-counter-display"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md bg-gray-50"
          >
            {count}
          </div>
        </div>
      </div>

      {/* Status indicator */}
      <div
        className={`mb-4 p-3 rounded-md ${
          running
            ? "bg-green-50 border border-green-200"
            : "bg-gray-50 border border-gray-200"
        }`}
      >
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              running ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
          <p
            className={`text-sm font-medium ${
              running ? "text-green-700" : "text-gray-600"
            }`}
          >
            Timer status:{" "}
            <span className="font-bold">{running ? "Running" : "Stopped"}</span>
          </p>
        </div>
        {running && (
          <p className="text-xs text-green-600 mt-1">
            Both counters are updating. The left counter may continue after
            stopping due to missing cleanup!
          </p>
        )}
        {!running && (
          <p className="text-xs text-gray-500 mt-1">
            Press "Start Timer" to begin the demonstration
          </p>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={() => setRunning(!running)}
          className={`mt-1 block w-full pl-3 pr-10 py-2 cursor-pointer text-base border focus:outline-none focus:ring-2 sm:text-sm rounded-md text-white ${
            running
              ? "bg-red-500 hover:bg-red-600 focus:ring-red-300 border-red-400"
              : "bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-300 border-indigo-400"
          }`}
        >
          {running ? "Stop Timer" : "Start Timer"}
        </button>
        <button
          onClick={resetTimer}
          className="mt-3 block w-full pl-3 pr-10 py-2 text-base cursor-pointer border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
};
export default Counter;
