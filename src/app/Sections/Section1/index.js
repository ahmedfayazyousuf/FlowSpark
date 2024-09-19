'use client';

import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; 

export default function Section1() {
  const [theme] = useState('light');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!fullName || !email || !consent) {
      setStatus(null);
      setError('Please enter all fields');
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          consent,
        }),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const result = await response.json();
      console.log(result);
      setStatus('success');
      setError(null);
      
      setFullName('');
      setEmail('');
      setConsent(false);

      setTimeout(() => {
        setStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatus(null);
      setError(error.message === 'Server error' ? 'Server error, try again later' : 'Please enter all fields');
      
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 py-0 my-0">
        <main className="flex flex-col items-center py-0 px-4 md:px-12 lg:px-24">
          <section className="w-full flex flex-col md:flex-row gap-8" style={{ maxWidth: '75vw' }}>
            
            <div className="flex flex-col w-full md:w-1/2">
              <div className="flex flex-col items-left mb-4">
                <img src="/Images/Arrow2.png" alt="Description" className="w-5/12" style={{ margin: '0px 0px -20px -20px' }} />
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

            <div className="flex flex-col w-full md:w-1/2 justify-center">
              <form className="flex flex-col gap-0" onSubmit={handleSubmit}>
                <label className="block text-black dark:text-white text-sm">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white-100 dark:bg-gray-800 text-black dark:text-white rounded-md mb-4"
                />
                
                <label className="block text-black dark:text-white text-sm">Full Name</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white-100 dark:bg-gray-800 text-black dark:text-white rounded-md mb-4" 
                />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor="consent" className="text-gray-600 dark:text-gray-400 text-sm">
                    I consent to my details being processed in line with the <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                  </label>
                </div>
                <div className="flex gap-4 mt-4">
                  <button type="submit" className="bg-[#4bb4a6] text-white py-2 px-5 rounded-full">
                    Book Your Demo
                  </button>
                  <button type="button" className="border-2 border-[#4bb4a6] bg-transparent text-gray-800 dark:text-white py-2 px-5 rounded-full">
                    Start My Free Trial
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-2">
                  Free 14-day trial. Cancel anytime.
                </p>
                
              </form>
              {status && (
                <div className="flex items-center mt-4 p-2 border rounded-md text-xs" style={{ borderColor: 'green', color: 'green', backgroundColor: 'transparent' }}>
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Form Submitted Successfully</span>
                </div>
              )}
              {error && (
                <div className="flex items-center mt-4 p-2 border rounded-md text-xs" style={{ borderColor: 'red', color: 'red', backgroundColor: 'transparent' }}>
                  <FaTimes className="text-red-500 mr-2" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
