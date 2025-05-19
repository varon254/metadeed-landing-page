const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
        italiana: ['"Italiana"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "scroll-loop": "scroll 40s linear infinite",
        "scroll-right": "scrollRight 40s linear infinite",
      },
      boxShadow: {
        customPurple: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
      },
    },
  },
  plugins: [],
});
