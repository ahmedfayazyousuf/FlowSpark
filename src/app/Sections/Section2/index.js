'use client';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function Section2() {
  const [theme] = useState('light'); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const images = [
    '/Images/Vectors/Vec1.png',
    '/Images/Vectors/Vec2.png',
    '/Images/Vectors/Vec3.png',
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={theme}>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <main className="flex flex-col items-center py-16 px-4 md:px-12 lg:px-24">
          <section className="mt-16 w-full bg-[#f3fcf9] dark:bg-gray-800 py-8 px-4 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Div */}
              <div className="flex flex-col w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">FlowSpark Features</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 border-l-4 border-[#4bb4a6]">
                    <h4 className="text-xs font-bold text-gray-800 dark:text-white">Effortless interface</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Simplify your marketing</p>
                  </div>
                  <div className="p-4 border-l-4 border-[#aaf0e6]">
                    <h4 className="text-xs font-bold text-gray-800 dark:text-white">Seamless connections</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Total sync with your tools</p>
                  </div>
                  <div className="p-4 border-l-4 border-[#aaf0e6]">
                    <h4 className="text-xs font-bold text-gray-800 dark:text-white">Tailored experience</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Customise with ease</p>
                  </div>
                  <div className="p-4 border-l-4 border-[#aaf0e6]">
                    <h4 className="text-xs font-bold text-gray-800 dark:text-white">All-in-one platform</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Unified marketing mastery</p>
                  </div>
                  <div className="p-4 border-l-4 border-[#aaf0e6]">
                    <h4 className="text-xs font-bold text-gray-800 dark:text-white">Smart insights</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">AI-powered marketing intelligence</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
                  Experience simplicity with our user-friendly interface, designed for effortless navigation. Transform complex tasks into simple actions, enhancing productivity and strategic focus. Enjoy a seamless experience that drives results and optimizes your marketing efforts efficiently.
                </p>
                <button className="mt-4 border-2 border-[#4bb4a6] bg-transparent text-gray-800 dark:text-white py-2 px-4 rounded-full" style={{width: '270px'}}>
                  See more features
                </button>
              </div>

              {/* Right Div */}
              <div className="w-full md:w-1/2 flex justify-center items-center relative">
                <div className="relative w-full max-w-md">
                  <div className="overflow-hidden relative">
                    <img src={images[currentImageIndex]} alt="Feature" className="w-full h-auto" />
                    <button onClick={handlePrevClick} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white text-gray-800 dark:bg-gray-900 dark:text-white rounded-full shadow-lg">
                      <FaArrowLeft />
                    </button>
                    <button onClick={handleNextClick} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white text-gray-800 dark:bg-gray-900 dark:text-white rounded-full shadow-lg">
                      <FaArrowRight />
                    </button>
                  </div>
                  <div className="flex justify-center mt-2">
                    {images.map((_, index) => (
                      <div key={index} className={`w-2 h-2 rounded-full mx-1 ${index === currentImageIndex ? 'bg-[#4bb4a6]' : 'bg-gray-400 dark:bg-gray-600'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
