'use client';

import { useState } from 'react';

export default function Section1() {
  const [theme, setTheme] = useState('light');


  return (
    <div className={theme}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 py-0 my-0">
        <main className="flex flex-col items-center py-0 px-4 md:px-12 lg:px-24">
          <section className="w-full flex flex-col md:flex-row gap-8" style={{ maxWidth: '75vw'}}>
            {/* Left Div */}
            <div className="flex flex-col w-full md:w-1/2">
              <div className="flex flex-col items-left mb-4">
                <img src="/Images/Arrow2.png" alt="Description" className="w-5/12" style={{margin: '0px 0px -20px -20px'}}/>
                <h1 className="text-5xl font-bold text-[#4bb4a6] mt-4">FlowSpark</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Digital Marketing Solutions</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  We believe that marketing should not be a headache, so we have crafted a platform that is super easy to use but does not skimp on the powerful stuff.
                </p>
                <div className='flex w-full items-center justify-center'>
                  <img src="/Images/Vectors/VecMain.png" alt="Description" className="w-7/12 mt-4" />
                </div>
              </div>
            </div>
            {/* Right Div */}
            <div className="flex flex-col w-full md:w-1/2 justify-center">
              <form className="flex flex-col gap-4">
                <input
                  type="text" placeholder="Full Name" className="w-full p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full-lg border border-gray-300 dark:border-gray-700 shadow"
                />
                <input
                  type="email" placeholder="Email Address" className="w-full p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full-lg border border-gray-300 dark:border-gray-700 shadow"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="consent" className="w-4 h-4" />
                  <label htmlFor="consent" className="text-gray-600 dark:text-gray-400 text-sm">
                    I consent to my details being processed in line with the <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                  </label>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="bg-[#4bb4a6] text-white py-2 px-5 rounded-full">
                    Book Your Demo
                  </button>
                  <button className="border-2 border-[#4bb4a6] bg-transparent text-gray-800 dark:text-white py-2 px-5 rounded-full">
                    Start My Free Trial
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
