'use client';

import { useState } from 'react';

export default function Section3() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
      <div className="bg-transparent transition-colors duration-300 py-0 my-0">
        <main className="flex flex-col items-center py-0 px-4 md:px-12 lg:px-24">

          <section className="w-full flex flex-col md:flex-col gap-8 justify-center items-center text-center" style={{width: '95vw', maxWidth: '600px'}}>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
              Want to see how we can help?
            </h2>
            
            <p className="text-base md:text-base text-gray-800 dark:text-gray-300 mb-6">
              Ready to transform your marketing? Book a demo or start your free trial today and see firsthand how we can make your marketing efforts more effective and enjoyable!
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-[#4bb4a6] text-white py-3 px-6 rounded-full" onClick={() => console.log('Schedule a call')}>
                Schedule a Call
              </button>
              <button className="bg-transparent border-2 border-[#4bb4a6] text-[#4bb4a6] dark:text-white py-3 px-6 rounded-full" onClick={() => console.log('Start Free Trial')}>
                Start Free Trial
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-0" style={{marginTop: '-20px'}}>
              Free 14-day trial. Cancel anytime.
            </p>
          </section>
          
        </main>
      </div>
    </div>
  );
}
