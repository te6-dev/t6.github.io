/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // Para todos los archivos HTML en la raíz del proyecto
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      size: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
