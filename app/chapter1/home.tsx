import type { Route } from "../+types/root";
import { Link } from "react-router";
import Topbar from "./layout/topbar";
import { useCustomNavigation } from "~/hooks/useNavigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GoProReact - Chapter 1: The Right Way to useEffect" },
    { name: "description", content: "Case Study: BookFinder Component" },
  ];
}

export default function Home() {
  const { prevPath, nextPath } = useCustomNavigation();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 py-6">
        <Topbar nextPath={nextPath} prevPath={prevPath} />
        <div className="max-w-4xl mx-auto">
          {/* Chapter Title */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">
              Chapter 1: The Right Way to useEffect
            </h2>
            <div className="h-1 w-24 mx-auto bg-blue-600 dark:bg-blue-600 rounded-full mt-3"></div>
          </div>

          {/* Introduction */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
            <p className="text-lg mb-4">
              Welcome to Chapter 1 of the GoProReact Book, where we explore the
              proper implementation of React's useEffect hook through the
              BookFinder component case study.
            </p>
            <p className="text-lg">
              In this chapter, we'll examine different implementations of the
              BookFinder component, each showcasing various approaches to
              effects and state management. Through these examples, you'll learn
              common pitfalls and best practices when working with React's
              useEffect hook.
            </p>
          </div>

          {/* Case Study */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10 border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-500">
              Case Study: BookFinder Component
            </h3>
            <p className="mb-6">
              The BookFinder component demonstrates a simple search
              functionality that fetches data from an API based on user input.
              We'll explore four different implementations, each highlighting
              different aspects of React's useEffect and state management:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    1
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                    Working Implementation
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Properly synchronized state and effects
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    2
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                    Broken Sync (No State)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Implementation without proper state management
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    3
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                    Broken Sync (No useEffect)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Implementation missing the useEffect hook
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    4
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                    Empty Dependency Array
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Implementation with an empty dependency array
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/the-right-way-to-useeffect/synchronised"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Explore the Case Study →
              </Link>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  Navigation Guide
                </h3>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Use the sidebar navigation in the case study view to switch
                between the different implementations. Each implementation
                showcases different patterns and potential issues.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="h-5 w-5 mr-2 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Compare code structure and behavior
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="h-5 w-5 mr-2 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Observe differences in performance
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="h-5 w-5 mr-2 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Understand synchronization issues
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  Key Takeaways
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mt-1 mr-2 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Properly manage dependencies in useEffect to avoid
                    unnecessary renders
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mt-1 mr-2 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Consider the timing of state updates in relation to effects
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mt-1 mr-2 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Understand when to use different dependency array
                    configurations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mt-1 mr-2 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Implement cleanup functions where appropriate
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8">
            <Link
              to="/the-right-way-to-useeffect/synchronised"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
