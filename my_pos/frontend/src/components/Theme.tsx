import { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

function Theme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return saved || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className=" shadow-xs px-2 py-1  cursor-pointer rounded dark:shadow-xs hover:bg-[#ddcdcd] dark:bg-[#0b0b0b]">
        {theme === "dark" ? (
          <CiDark className="h-5 w-5" />
        ) : (
          <CiLight className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

export default Theme;
