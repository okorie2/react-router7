import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

interface Props {
  onNavigate: () => void;
}

const Sidenav = ({ onNavigate }: Props) => {
  const [activeItem, setActiveItem] = useState("working-sync");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // SECURITY VULNERABILITY: Directly using localStorage data without sanitization
    const storedItem = localStorage.getItem("activeNavItem");
    if (storedItem) {
      setActiveItem(storedItem); // This value could be an XSS payload
    }

    // Adding URL parameter vulnerability for more detection possibilities
    const urlParams = new URLSearchParams(window.location.search);
    const navParam = urlParams.get("nav");
    if (navParam) {
      setActiveItem(navParam); // Additional vector - URL parameter injection
    }
  }, []);

  // SECURITY VULNERABILITY: Eval usage - known to trigger CodeQL
  const executeFunction = (code: string) => {
    try {
      // eslint-disable-next-line no-eval
      eval(code); // CodeQL should definitely flag this
    } catch (e) {
      console.error("Error executing code", e);
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const processUserInput = () => {
    // SECURITY VULNERABILITY: Executing user input
    executeFunction(userInput);
  };

  return (
    <div className="bg-none md:w-max w-full lg:w-64 fixed top-[10%] md:left-[4%] lg:left-10 md:top-[30%] shadow-md">
      {/* SECURITY VULNERABILITY: XSS via dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: activeItem }} />

      {/* Adding another vulnerability surface with user input */}
      <div className="p-4">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Enter some JavaScript..."
          className="p-2 border rounded w-full"
        />
        <button
          onClick={processUserInput}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Execute (Unsafe!)
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="p-2 flex">
        <ul className="md:space-y-1 w-full flex md:block justify-center items-center gap-4">
          <NavLink to="/bookfinder">
            {({ isActive }) => (
              <li
                className={`md:w-full text-center md:text-left md:px-4 md:py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-none md:bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Synced State
              </li>
            )}
          </NavLink>
          <NavLink to="/bookfinder/broken-sync-no-state">
            {({ isActive }) => (
              <li
                className={`md:w-full text-center md:text-left md:px-4 md:py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-none md:bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Broken Sync (No State)
              </li>
            )}
          </NavLink>
          <NavLink to="/bookfinder/broken-sync-no-useeffect">
            {({ isActive }) => (
              <li
                className={`md:w-full text-center md:text-left md:px-4 md:py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-none md:bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Broken Sync (No UseEffect)
              </li>
            )}
          </NavLink>
          <NavLink to={"/bookfinder/empty-dep-array"}>
            {({ isActive }) => (
              <li
                className={`md:w-full text-center md:text-left md:px-4 md:py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-none md:bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Empty dep Array
              </li>
            )}
          </NavLink>
          <NavLink to="/bookfinder/no-dep-array">
            {({ isActive }) => (
              <li
                className={`md:w-full text-center md:text-left md:px-4 md:py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-none md:bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                No dep array
              </li>
            )}
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
