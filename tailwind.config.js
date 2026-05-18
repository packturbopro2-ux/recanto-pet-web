/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // O TanStack às vezes usa a pasta app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
