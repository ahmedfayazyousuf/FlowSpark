import { FaGlobe, FaHeadset, FaMoon, FaSun, FaDesktop } from 'react-icons/fa';

export default function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`flex justify-between items-center p-2 bg-gray-200 dark:bg-gray-800`} style={{ height: '50px' }}>
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1">
          <FaGlobe className="text-gray-600 dark:text-gray-300" />
          <select className="bg-transparent border-none text-gray-600 dark:text-gray-300">
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
        <button className="bg-gray-100 dark:bg-gray-700 rounded-full px-5 py-1 text-gray-600 dark:text-gray-300">
          CHAT WITH SALES
        </button>
        <button className="bg-gray-100 dark:bg-gray-700 rounded-full px-5 py-1 text-gray-600 dark:text-gray-300">
          <FaHeadset className="inline" />
          SUPPORT
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={toggleTheme} className="bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-600 dark:text-gray-300">
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </button>
        <button className="bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-600 dark:text-gray-300">
          <FaDesktop />
        </button>
      </div>
    </div>
  );
}
