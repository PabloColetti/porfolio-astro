import { useEffect, useState } from "preact/hooks";

export default function BtnToggleTheme({ textTheme }) {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <button
        class="bg-purple-500 text-white p-2 rounded-md text-center
        border border-transparent
        hover:bg-purple-600 hover:border hover:border-white
        min-w-[80px]"
        onClick={toggleTheme}
      >
        {theme === "dark" ? textTheme.dark : textTheme.light}
      </button>
    </>
  );
}
