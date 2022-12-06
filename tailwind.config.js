module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        CooperBlack: ['Cooper-Black'],
        Copperplate: ['Copperplate'], 
        ComicNeue:['ComicNeue'], 
        PlayFair: ['Playfair Display'],
        Roboto: ['Roboto']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}