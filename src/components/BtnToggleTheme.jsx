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
    <button onClick={toggleTheme} class="btn-primary">
      {theme === "dark" ? textTheme.dark : textTheme.light}
    </button>
  );
}
