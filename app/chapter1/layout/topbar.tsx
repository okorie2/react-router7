import React from "react";
import { Link } from "react-router";

export interface NavbarProps {
  nextPath: {
    title: string;
    ariaLabel: string;
    path: string;
  };
  prevPath: {
    title: string;
    ariaLabel: string;
    path: string;
  };
}
const Topbar = (props: NavbarProps) => {
  return (
    <div className="flex justify-between items-center mb-8 container mx-auto px-4 py-12">
      <Link to="/" className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center mr-3 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-white">GoProReact</span>
      </Link>

      <div className="flex gap-3">
        <Link
          to={props.prevPath.path}
          className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
          title={props.prevPath.title}
          aria-label={props.prevPath.ariaLabel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <Link
          to={props.nextPath.path}
          className="w-12 h-12 bg-indigo-600 dark:bg-indigo-700 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
          title={props.nextPath.title}
          aria-label={props.nextPath.ariaLabel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
