/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-1": "#FCE8DC",
        "base-2": "#FCDDDC",
        "base-3": "#FCE2DC",
        "base-4": "#FCEEDC",
        "base-5": "#FCF2DC",
        "base-6": "#FFFAEF",
        "dark-blue": "rgba(54, 101, 125 / <alpha-value>)",
        "light-blue": "rgba(20, 241, 252, <alpha-value>)",
        "dark-green": "rgba(100, 166, 167, <alpha-value>)",
        "mid-green": "rgba(82, 125, 134, <alpha-value>)",
        "light-green": "rgba(220, 252, 242, <alpha-value>)",
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
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: `2px 2px 20px rgba(18, 155, 234, 0.35)`,
        cardEmphasis: `2px 2px 30px 0px rgba(18, 155, 234, 0.50)`,
        greyMed: `1px 2px 10px rgba(90, 109, 124, 0.57)`,
        greyLt: `1px 2px 10px rgba(90, 109, 124, 0.21)`,
      },
    },
  },
};
