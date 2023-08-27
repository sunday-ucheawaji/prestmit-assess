/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      rotate: {
        45: "45deg",
        90: "90deg",
        "-45": "-45deg",
        "-90": "-90deg",
        // Add other rotations if needed
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".arc-background": {
          position: "absolute",
          top: 0,
          right: 0,
          width: "32rem",
          height: "32rem",
          background: "#1C3D5B",
          borderBottomLeftRadius: "150%",
          // boxShadow: "inset -25rem 0 0 0",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
