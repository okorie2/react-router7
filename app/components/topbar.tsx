import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("bookfinder");

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="font-bold text-xl">GoProReact</div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="#bookfinder"
              className={`py-1 px-2 rounded hover:bg-blue-700 transition ${
                activeTab === "bookfinder"
                  ? "border-b-2 border-white font-medium"
                  : ""
              }`}
              onClick={() => setActiveTab("bookfinder")}
            >
              Book Finder
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
