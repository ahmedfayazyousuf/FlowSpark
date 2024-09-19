'use client';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

const imageSets = {
  set1: [
    '/Images/Vectors/VecCarouselS1/Vec1.png',
    '/Images/Vectors/VecCarouselS1/Vec2.png',
    '/Images/Vectors/VecCarouselS1/Vec3.png',
  ],
  set2: [
    '/Images/Vectors/VecCarouselS2/Vec1.png',
    '/Images/Vectors/VecCarouselS2/Vec2.png',
    '/Images/Vectors/VecCarouselS2/Vec3.png',
  ],
  set3: [
    '/Images/Vectors/VecCarouselS3/Vec1.png',
    '/Images/Vectors/VecCarouselS3/Vec2.png',
    '/Images/Vectors/VecCarouselS3/Vec3.png',
  ],
  set4: [
    '/Images/Vectors/VecCarouselS4/Vec1.png',
    '/Images/Vectors/VecCarouselS4/Vec2.png',
    '/Images/Vectors/VecCarouselS4/Vec3.png',
  ],
  set5: [
    '/Images/Vectors/VecCarouselS5/Vec1.png',
    '/Images/Vectors/VecCarouselS5/Vec2.png',
    '/Images/Vectors/VecCarouselS5/Vec3.png',
  ],
};

export default function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSet, setActiveSet] = useState('set1');

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageSets[activeSet].length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imageSets[activeSet].length - 1 ? 0 : prevIndex + 1));
  };

  const handleSetChange = (setKey) => {
    setActiveSet(setKey);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <main className="flex flex-col items-center py-16 px-4 md:px-12 lg:px-24">
        <section className="mt-8 w-full bg-[#f3fcf9] dark:bg-gray-800 py-16 px-4 md:py-10 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row gap-8">
            
            <div className="flex flex-col w-full md:w-1/2 relative">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">FlowSpark Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries({
                  'Effortless interface': 'set1',
                  'Seamless connections': 'set2',
                  'Tailored experience': 'set3',
                  'All-in-one platform': 'set4',
                  'Smart insights': 'set5'
                }).map(([title, setKey]) => (
                  <div
                    key={setKey}
                    onClick={() => handleSetChange(setKey)}
                    className={`p-4 border-l-4 cursor-pointer ${activeSet === setKey ? 'border-[#4bb4a6]' : 'border-gray-300 dark:border-gray-600'}`}
                  >
                    <h4 className="text-xs font-bold text-gray-800 dark:text-white">{title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Description for {title}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
                Experience simplicity with our user-friendly interface, designed for effortless navigation. Transform complex tasks into simple actions, enhancing productivity and strategic focus. Enjoy a seamless experience that drives results and optimizes your marketing efforts efficiently.
              </p>
              <button className="mt-4 border-2 border-[#4bb4a6] bg-transparent text-gray-800 dark:text-white py-2 px-4 rounded-full" style={{ width: '270px' }}>
                See more features
              </button>
              
              <img src="/Images/Arrow4.png" alt="Description" className="w-5/12 floating-image" style={{ position: 'absolute', bottom: '0', left: '0', marginLeft: '-120px', marginBottom: '-120px' }} />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center relative justify-center">
              <div className="relative w-full max-w-md">
                <div className="overflow-hidden relative">
                  <Image 
                    src={imageSets[activeSet][currentImageIndex]} 
                    alt="Feature" 
                    layout="responsive" 
                    width={500} 
                    height={300} 
                  />
                  <button onClick={handlePrevClick} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white text-gray-800 dark:bg-gray-900 dark:text-white rounded-full shadow-lg">
                    <FaArrowLeft />
                  </button>
                  <button onClick={handleNextClick} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white text-gray-800 dark:bg-gray-900 dark:text-white rounded-full shadow-lg">
                    <FaArrowRight />
                  </button>
                </div>
                <div className="flex justify-center mt-2">
                  {imageSets[activeSet].map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full mx-1 ${index === currentImageIndex ? 'bg-[#4bb4a6]' : 'bg-gray-400 dark:bg-gray-600'}`} />
                  ))}
                </div>
                <div className="relative w-full h-1 mt-2">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#4bb4a6] rounded-full transition-all duration-500"
                    style={{ width: `${((currentImageIndex + 1) / imageSets[activeSet].length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
