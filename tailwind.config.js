/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        caslon: ['"Caslon"', "serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        primary: 'rgb(var(--color-primary)/<alpha-value>)',
        secondary: 'rgb(var(--color-secondary)/<alpha-value>)',
        accent: 'rgb(var(--color-accent)/<alpha-value>)',
      },
      minHeight: {
          v10: "10vh",
          v20: "20vh",
          v30: "30vh",
          v40: "40vh",
          v50: "50vh",
          v60: "60vh",
          v70: "70vh",
          v80: "80vh",
          v90: "90vh",
        },
      height: {
          v10: "10vh",
          v20: "20vh",
          v30: "30vh",
          v40: "40vh",
          v50: "50vh",
          v60: "60vh",
          v70: "70vh",
          v80: "80vh",
          v90: "90vh",
        },
    },
  },
  plugins: [],
}
