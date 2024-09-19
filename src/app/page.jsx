'use client';

import { useState } from 'react';
import Navbar from './Sections/Header/Navbar.js';
import './globals.css'
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Modal from './Sections/Modal';
import Header from './Sections/Header';
import Footer from './Sections/Footer';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />

      <Header setIsModalOpen={setIsModalOpen} />

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen} />
        )}

        <main className="flex flex-col items-center py-4 px-4 md:px-12 lg:px-24">
          <Section1 />
          <Section2 />
          <Section3 setIsModalOpen={setIsModalOpen} />
        </main>

        <Footer />
      </div>
    </div>
  );
}


