/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-image': "url('/src/iamges/wingoimg/bgWalletdepo.png')",
        'custom-back': "url('/src/iamges/wingoimg/wingoissue-50228a79.png')",
      },
    },
  },
  plugins: [],
}
