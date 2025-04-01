import React from "react";
import { Link } from "react-router";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GoProReact - Chapter 3: React Design Patterns" },
    { name: "description", content: "Learn advanced React design patterns for scalable applications" },
  ];
}

export default function Chapter3ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-4">
      <div className="max-w-xl w-full text-center">
        {/* Logo and title */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-green-600 dark:bg-green-700 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Chapter 3</h1>
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
            React Design Patterns
          </h2>
          <div className="h-1 w-24 bg-green-600 dark:bg-green-400 rounded-full"></div>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 mb-10">
          <div className="inline-block bg-yellow-100 dark:bg-yellow-900 px-4 py-2 rounded-full text-yellow-800 dark:text-yellow-200 font-semibold text-sm mb-6">
            Coming Soon
          </div>
          
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Elevate your React architecture
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Chapter 3 on React Design Patterns is currently in development. 
            Here's a preview of what you'll master:
          </p>
          
          {/* Topics preview */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-8">
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="font-semibold">Compound Components</strong> - Building flexible component systems with implicit state sharing
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="font-semibold">Render Props Pattern</strong> - Creating reusable components with dynamic rendering logic
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="font-semibold">Custom Hooks</strong> - Extracting and sharing stateful logic between components
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="font-semibold">Provider Pattern</strong> - Managing application state with React Context
                </span>
              </li>
            </ul>
          </div>
          
          {/* Coming soon timeline */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-full max-w-xs bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full w-1/4"></div>
            </div>
            <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">25% complete</span>
          </div>
          
          {/* Notification sign-up form (for visual purposes) */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get notified when Chapter 3 launches:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white flex-grow focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                disabled
              />
              <button 
                className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                disabled
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Book Home
          </Link>
          
          <span className="hidden sm:inline text-gray-400">&bull;</span>
          
          <Link 
            to="/react-server-components" 
            className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            View Chapter 2
          </Link>
        </div>
      </div>
    </div>
  );
}