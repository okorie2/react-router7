import React from "react";
import { Link } from "react-router";
import type { Route } from "./+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GoProReact Book" },
    {
      name: "description",
      content: "A comprehensive guide to mastering React",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header with Logo */}
        <header className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-white"
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
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            GoProReact Book
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The comprehensive guide to mastering React for professional
            developers
          </p>
        </header>

        {/* Book Introduction */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              About This Book
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                GoProReact
              </span>{" "}
              is a practical guide designed for developers who want to master
              React and build production-quality applications. From
              understanding core concepts to implementing advanced patterns,
              this book will help you level up your React skills.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Each chapter combines theory with practical examples and case
              studies to help you not just understand concepts, but apply them
              effectively in real-world projects.
            </p>
          </div>
        </section>

        {/* Chapters Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">
            Chapters
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Chapter 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 shadow-lg p-6 transition-transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center mr-3 text-white font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Chapter 1
                </h3>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                The Right Way to useEffect
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Master React's useEffect hook with our BookFinder case study.
                Learn how to properly manage dependencies, avoid common
                pitfalls, and create optimized, clean effects.
              </p>
              <Link
                to="/the-right-way-to-useeffect"
                className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
              >
                Explore Chapter
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Chapter 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 shadow-lg p-6 transition-transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 dark:bg-purple-700 flex items-center justify-center mr-3 text-white font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Chapter 2
                </h3>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                React Server Components
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Dive into the next evolution of React with Server Components.
                Learn how to build hybrid applications that blend client and
                server rendering for optimal performance.
              </p>
              <span className="inline-flex items-center font-medium text-gray-500 dark:text-gray-400">
                Coming Soon
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </div>

            {/* Chapter 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 shadow-lg p-6 transition-transform hover:translate-y-[-4px]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 dark:bg-green-700 flex items-center justify-center mr-3 text-white font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Chapter 3
                </h3>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
                React Design Patterns
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Explore advanced design patterns that will help you build
                scalable, maintainable React applications. From compound
                components to the render props pattern.
              </p>
              <span className="inline-flex items-center font-medium text-gray-500 dark:text-gray-400">
                Coming Soon
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start Your React Mastery Journey
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Dive into our first chapter and begin your journey to React
              mastery today. Each chapter builds on the previous one, helping
              you become a React expert step by step.
            </p>
            <Link
              to="/the-right-way-to-useeffect"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Begin Reading Chapter 1
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 dark:text-gray-400 py-8">
          <p>
            © {new Date().getFullYear()} GoProReact Book. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Created with React Router and TailwindCSS
          </p>
        </footer>
      </div>
    </div>
  );
}
