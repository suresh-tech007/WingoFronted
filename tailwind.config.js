/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scrollbar-thumb': '#4a5568',  // Darker color for the thumb
        'scrollbar-thumb-hover': '#2c6ee2',  // Darker on hover
        'scrollbar-track': '#22275b',  // Lighter color for the track
      },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-image': "url('/src/iamges/wingoimg/bgWalletdepo.png')",
        'custom-back': "url('/src/iamges/wingoimg/wingoissue-50228a79.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),  // Add the scrollbar plugin
  ],
}

 
