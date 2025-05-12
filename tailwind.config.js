const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: [],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
        italiana: ['"Italiana"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
