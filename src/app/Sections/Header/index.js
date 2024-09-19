'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';


export default function Header({ setIsModalOpen }) {
    const [theme] = useState('light'); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={theme}>
        
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <header className="relative flex justify-between items-center p-6 bg-[#f3fcf9] dark:bg-gray-800 shadow-md" style={{ width: '95vw', maxWidth: '1350px', height: '100px', borderRadius: '50px', margin: '0 auto' }}>
            <div className="flex items-center">
                <Image src="/Images/BrandAssets/Logo.png" alt="FlowSpark Logo" width={150} height={100} className="object-contain" />
            </div>
            <div className="hidden md:flex gap-10">
                <a href="#features" className="text-lg text-gray-800 dark:text-white">Features</a>
                <a href="#industries" className="text-lg text-gray-800 dark:text-white">Industries</a>
                <a href="#pricing" className="text-lg text-gray-800 dark:text-white">Pricing</a>
                <a href="#resources" className="text-lg text-gray-800 dark:text-white">Resources</a>
            </div>
            <div className="hidden md:flex gap-4">
                <button className="bg-[#4bb4a6] text-white py-2 px-5 rounded-full" onClick={() => setIsModalOpen(true)}>Schedule a call</button>
                <button className="border-2 border-[#4bb4a6] bg-transparent text-gray-800 dark:text-white py-2 px-5 rounded-full">Free trial</button>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes className="h-6 w-6 text-gray-800 dark:text-white" /> : <FaBars className="h-6 w-6 text-gray-800 dark:text-white" />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white dark:bg-gray-800 z-50 flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center">
                    <a href="#features" className="text-lg text-gray-800 dark:text-white py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
                    <a href="#industries" className="text-lg text-gray-800 dark:text-white py-2" onClick={() => setIsMenuOpen(false)}>Industries</a>
                    <a href="#pricing" className="text-lg text-gray-800 dark:text-white py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                    <a href="#resources" className="text-lg text-gray-800 dark:text-white py-2" onClick={() => setIsMenuOpen(false)}>Resources</a>
                    <button className="bg-[#4bb4a6] text-white py-2 px-4 rounded-full mt-4" onClick={() => setIsModalOpen(true)}>Schedule a call</button>
                    <button className="bg-[#4bb4a6] text-white py-2 px-4 rounded-full mt-2">Free trial</button>
                </nav>
                </div>
            )}
            </header>
        </div>
    </div>
  );
}
