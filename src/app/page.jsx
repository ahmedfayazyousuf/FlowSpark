'use client';

import { useState } from 'react';
import Navbar from '../app/Navbar';

export default function Home() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      <header className="flex justify-between items-center p-6 bg-teal-500 dark:bg-teal-700 shadow-md" style={{ maxWidth: '80vw', height: '100px', borderRadius: '50px', backgroundColor: '#f3fcf9', margin: '10px auto' }}>

        <div className="flex items-center">
          <h1 className="text-2xl text-[#4bb4a6] font-bold tracking-wide">FlowSpark</h1>
        </div>
        <div className="flex gap-4">
          <a href="#features" className="text-lg text-gray-800 dark:text-white">Features</a>
          <a href="#industries" className="text-lg text-gray-800 dark:text-white">Industries</a>
          <a href="#pricing" className="text-lg text-gray-800 dark:text-white">Pricing</a>
          <a href="#resources" className="text-lg text-gray-800 dark:text-white">Resources</a>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#4bb4a6] text-white py-2 px-4 rounded-full">Schedule a call</button>
          <button className="bg-[#4bb4a6] text-white py-2 px-4 rounded-full">Free trial</button>
        </div>

      </header>



        <main className="flex flex-col items-center py-16 px-4 md:px-12 lg:px-24">
          {/* New Section */}
          <section className="w-full flex flex-col md:flex-row gap-8" style={{ maxWidth: '75vw'}}>
            {/* Left Div */}
            <div className="flex flex-col w-full md:w-1/2">
              <div className="flex flex-col items-left mb-4">
                <img src="/Images/Arrow.png" alt="Description" className="w-3/12"/>
                <h1 className="text-5xl font-bold text-[#4bb4a6] mt-4">FlowSpark</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Digital Marketing Solutions</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  We believe that marketing should not be a headache, so we have crafted a platform that is super easy to use.
                </p>
                <img src="/Images/Image1.png" alt="Description" className="w-7/12 mt-4" />
              </div>
            </div>

            {/* Right Div */}
            <div className="flex flex-col w-full md:w-1/2">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full-lg border border-gray-300 dark:border-gray-700 shadow"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full-lg border border-gray-300 dark:border-gray-700 shadow"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="consent" className="w-4 h-4" />
                  <label htmlFor="consent" className="text-gray-600 dark:text-gray-400">
                    I consent to my details being processed in line with the <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                  </label>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="w-1/2 p-4 bg-teal-500 dark:bg-teal-700 text-white rounded-full-lg shadow-md hover:bg-teal-600 dark:hover:bg-teal-800 transition">
                    Book Your Demo
                  </button>
                  <button className="w-1/2 p-4 bg-teal-500 dark:bg-teal-700 text-white rounded-full-lg shadow-md hover:bg-teal-600 dark:hover:bg-teal-800 transition">
                    Start My Free Trial
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Features Section */}
          <section className="mt-16 w-full">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
              FlowSpark Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                  Efficient Integration
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Seamlessly integrates with your existing workflows.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                  Tailored Operations
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Custom-built to meet your specific needs.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                  Smart Analytics
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Provides insights into key operational metrics.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                  Automation
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Automate routine tasks for better efficiency.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-6 bg-teal-500 dark:bg-teal-700 text-white text-center">
          <p>&copy; FlowSpark 2024. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
