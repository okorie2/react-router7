import React, { useState } from "react";
import { NavLink } from "react-router";

interface props {
  onNavigate: () => void;
}
const Sidenav = ({ onNavigate }: props) => {
  const [activeItem, setActiveItem] = useState("working-sync");

  return (
    <div className="bg-none md:w-max  w-full lg:w-64 fixed top-[10%] md:left-[4%]  lg:left-10 md:top-[30%] shadow-md">
      {/* Navigation Items */}
      <nav className="p-2 flex ">
        <ul className="md:space-y-1 w-full flex md:block justify-center items-center gap-4 ">
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
                Empy dep Array
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
