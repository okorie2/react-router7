import React from "react";
import { Link } from "react-router";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GoProReact - Chapter 2: React Server Components" },
    { name: "description", content: "Learn about React Server Components" },
  ];
}

export default function Chapter2ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-4">
      <div className="max-w-xl w-full text-center">
        {/* Logo and title */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-purple-600 dark:bg-purple-700 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Chapter 2</h1>
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            React Server Components
          </h2>
          <div className="h-1 w-24 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 mb-10">
          <div className="inline-block bg-yellow-100 dark:bg-yellow-900 px-4 py-2 rounded-full text-yellow-800 dark:text-yellow-200 font-semibold text-sm mb-6">
            Coming Soon
          </div>
          
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            We're working on something awesome!
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Chapter 2 on React Server Components is currently under development. 
            Here's a sneak peek of what you'll learn:
          </p>
          
          {/* Topics preview */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-8">
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-purple-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="font-semibold">Server vs. Client Components</strong> - Understanding the fundamental differences
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-purple-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="font-semibold">Data Fetching Patterns</strong> - Optimizing API calls with React Server Components
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-purple-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="font-semibold">Building Hybrid Applications</strong> - Seamlessly mixing server and client components
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-purple-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="font-semibold">Performance Optimization</strong> - Techniques to maximize React Server Components benefits
                </span>
              </li>
            </ul>
          </div>
          
          {/* Notification sign-up form (for visual purposes) */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to know when Chapter 2 is available?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                disabled
              />
              <button 
                className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                disabled
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>
        
        {/* Back to home */}
        <Link 
          to="/" 
          className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Book Home
        </Link>
      </div>
    </div>
  );
}