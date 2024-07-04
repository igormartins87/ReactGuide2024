/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adicione os caminhos para seus arquivos JS/TS/JSX/TSX
  ],
  theme: {
    extend: {fontFamily:{
      title : ['"Pacifico"', 'cursive']
    }},
  },
  plugins: [],
}