module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: {
          blue: "hsl(238, 40%, 52%)",
          red: "hsl(358, 79%, 66%)",
          lightblue: "hsl(239, 57%, 85%)",
          palered: "hsl(357, 100%, 86%)",
        },
        neutral: {
          blue: "hsl(212, 24%, 26%)",
          grayblue: "hsl(211, 10%, 45%)",
          gray: "hsl(223, 19%, 93%)",
          lightgray: "hsl(228, 33%, 97%)",
        },
      },
    },
  },
  plugins: [],
};
