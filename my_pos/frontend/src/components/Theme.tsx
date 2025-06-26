import { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { Button } from "./ui/button";

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
    <Button
      onClick={toggleTheme}
      aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="px-2 py-1 rounded shadow bg-neutral-500 dark:hover:bg-neutral-500">
      {theme === "dark" ? (
        <CiDark className="h-5 w-5" />
      ) : (
        <CiLight className="h-5 w-5" />
      )}
    </Button>
  );
}

export default Theme;
