import React, { useState } from "react";

interface props {
  onNavigate: () => void;
}
const Sidenav = ({ onNavigate }: props) => {
  const [activeItem, setActiveItem] = useState("working-sync");

  return (
    <div className="bg-none md:w-max  w-full lg:w-64 fixed top-[10%] md:left-[4%]  lg:left-10 md:top-[30%] shadow-md">
      {/* Sidebar Header */}

      {/* Navigation Items */}
      <nav className="p-2 flex ">
        <ul className="md:space-y-1 w-full flex md:block justify-center items-center gap-4 ">
          <li
            className={`md:w-full text-center md:text-left md:px-4 md:py-2 rounded-md transition-colors ${
              activeItem === "broken-sync"
                ? " bg-none md:bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Broken Sync
          </li>
          <li
            className={`md:w-full text-center md:text-left md:px-4 md:py-2 rounded-md transition-colors ${
              activeItem === "working-sync"
                ? "bg-none md:bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Working Sync
          </li>
          <li
            className={`md:w-full text-center md:text-left md:px-4 md:py-2 rounded-md transition-colors ${
              activeItem === "counter"
                ? "bg-none md:bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Counter
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
