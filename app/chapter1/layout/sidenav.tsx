import React, { useState } from "react";
import { NavLink } from "react-router";
import { ChevronRight, List } from "lucide-react";

interface Props {
  onNavigate: () => void;
}

const Sidenav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true); // Open by default

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigate = () => {
    if (window.innerWidth < 640) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Fixed position toggle button on small screens */}
      <div className="md:hidden fixed top-[20%] right-4 z-30">
        {!mobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-all duration-300"
            aria-label="Open navigation"
          >
            <List size={24} />
          </button>
        )}
      </div>

      {/* Fixed position sidebar that slides in from right */}
      <div
        className={`fixed top-[15%] right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-l-lg shadow-xl z-40 transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} 
          md:translate-x-0 md:top-[30%] md:right-[4%] lg:right-10`}
      >
        {/* Navigation container with toggle button inline */}
        <div className="flex items-center">
          {/* Toggle button inside navigation bar */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-300 hover:bg-gray-800 rounded-l-lg transition-colors duration-200"
            aria-label="Close navigation"
          >
            <ChevronRight size={24} />
          </button>

          {/* Navigation Items */}
          <nav className="p-2">
            <ul className="flex flex-col gap-y-1">
              <NavLink
                to="/the-right-way-to-useeffect/synchronised"
                end
                onClick={handleNavigate}
              >
                {({ isActive }) => (
                  <li
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-800 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    Synced State
                  </li>
                )}
              </NavLink>

              <NavLink
                to="/the-right-way-to-useeffect/broken-sync-no-state"
                onClick={handleNavigate}
              >
                {({ isActive }) => (
                  <li
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-800 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    Broken Sync (No State)
                  </li>
                )}
              </NavLink>

              <NavLink
                to="/the-right-way-to-useeffect/broken-sync-no-useeffect"
                onClick={handleNavigate}
              >
                {({ isActive }) => (
                  <li
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-800 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    Broken Sync (No UseEffect)
                  </li>
                )}
              </NavLink>

              <NavLink
                to="/the-right-way-to-useeffect/no-sync"
                onClick={handleNavigate}
              >
                {({ isActive }) => (
                  <li
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-800 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    Empty dep Array
                  </li>
                )}
              </NavLink>

              <NavLink
                to="/the-right-way-to-useeffect/counter"
                onClick={handleNavigate}
              >
                {({ isActive }) => (
                  <li
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-800 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    Counter
                  </li>
                )}
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
