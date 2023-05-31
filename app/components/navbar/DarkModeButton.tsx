import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="bg-white dark:bg-dark-btn border-[1px] rounded-full hover:shadow-md transition dark:border-none dark:hover:bg-hover-btn">
      {currentTheme === 'dark' ? (
        <FaSun
          size={38}
          className="cursor-pointer text-yellow-500 p-2"
          onClick={() => setTheme('light')}
        />
      ) : (
        <FaMoon
          size={38}
          className="cursor-pointer text-gray-900 p-2"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
};

export default DarkModeButton;
