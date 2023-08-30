/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
       colors: {
         "primary-pink": "#F9DFCF",
         "light-pink":"#FDF8EF",
      "dark-pink": "#9F6A52",
      "primary-green": "#4A6443",
      "secondary-orange": "#EC7434",
    },
    },
   
  },
  plugins: [],
};
