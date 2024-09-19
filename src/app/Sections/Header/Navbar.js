import { IoChatbox } from "react-icons/io5";
import { FaGlobe, FaHeadset, FaMoon, FaSun, FaDesktop } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar({ theme, setTheme }) {
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex justify-between items-center p-2 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`} style={{ height: '50px' }}>
      <div className="flex items-center gap-2">
        <div className={`flex items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full px-2 py-1`}>
          <FaGlobe className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          <select className={`bg-transparent border-none ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xs`} style={{ fontSize: '9px' }}>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
        <button className={`bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-1 text-gray-600 dark:text-gray-300 text-xs`} style={{ fontSize: '9px' }}>
          <IoChatbox className="inline mr-1" />
          CHAT WITH SALES
        </button>
        <button className={`bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-1 text-gray-600 dark:text-gray-300 text-xs`} style={{ fontSize: '9px' }}>
          <FaHeadset className="inline mr-1" />
          SUPPORT
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className={`relative flex items-center justify-center w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          <div
            className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-6 bg-yellow-400' : 'translate-x-0 bg-blue-400'}`}
          />
          <FaMoon className={`absolute text-gray-400 ${isDarkMode ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} style={{ left: '0.5rem' }} />
          <FaSun className={`absolute text-yellow-500 ${isDarkMode ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} style={{ right: '0.5rem' }} />
        </button>
        <button className="bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-600 dark:text-gray-300">
          <FaDesktop />
        </button>
      </div>
    </div>
  );
}
