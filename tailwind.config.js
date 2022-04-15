module.exports = {
  darkMode: 'class',
  mode: 'jit',
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require('./theme.presets.js')],
  theme: {
    extend: {},
  },
  plugins: [],
}