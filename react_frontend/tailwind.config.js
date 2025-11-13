/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        error: "#EF4444",
        oceanBg: "#f9fafb",
      },
      boxShadow: {
        innerSoft: "inset 0 1px 2px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};
