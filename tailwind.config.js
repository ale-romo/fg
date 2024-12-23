/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["Garamond", "serif"],
        content: ['var(--font-content)'],
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
        '820px': '820px',
      },
    },
  },
  plugins: [],
}
