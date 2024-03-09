import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // boxShadow: {
      //   neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.500')",
      // },
      colors: {
        "dark": "#141414",
        "light": "#fff",
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme("colors");
      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const color1 = colors[color]["200"];
          const color2 = colors[color]["700"];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 30px ${color2}`,
          };
        }
      }

      addUtilities(neonUtilities);
    }),
  ],
};
