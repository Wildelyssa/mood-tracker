/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#FCE8DC",
        "primary-2": "#FCDDDC",
        "primary-3": "#FCE2DC",
        "primary-4": "#FCEEDC",
        "primary-5": "#FCF2DC",
        "primary-6": "#FFFAEF",
        "dark-blue": "rgb(54 101 125 / <alpha-value>)",
        "light-blue": "rgb(20 241 252 / <alpha-value>)",
        "dark-green": "rgb(100 166 167 / <alpha-value>)",
        "mid-green": "rgb(82 125 134 / <alpha-value>)",
        "light-green": "rgb(220 252 242 / <alpha-value>)",
        black: "#2E2E2E",
        gray: "#676767",
        white: "#FFFDFA",
        shade: "#001E24",
        chart: {
          purple: "#F0DCFC",
          yellow: "#F7FCDC",
          green: "#DCFCF2",
          blue: "#DCF1FC",
          pink: "#FCDDDC",
        },
        error: "#E05757",
        success: "#45C711",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: `2px 2px 20px rgba(18, 155, 234, 0.35)`,
        cardEmphasis: `2px 2px 30px 0px rgba(18, 155, 234, 0.50)`,
        greyMid: `1px 2px 10px rgba(90, 109, 124, 0.57)`,
        greyLight: `1px 2px 10px rgba(90, 109, 124, 0.21)`,
      },
    },
  },
  plugins: [],
};
