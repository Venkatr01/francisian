/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#ffcdb2', //msg section
        'custom-blue': '#e5e5e5',
        'header' : '#9e2a2b',
        'active' : '#f5cac3'
      },
      fontFamily: {
        'press-start': ['"Major Mono Display"', 'monospace'],
        'headerf': [' "Merriweather"','serif'],
        'bday': [' "Poetsen One"','sans-serif']
      },
      backgroundImage: {
        'celeb': "url('https://purepng.com/public/uploads/large/celebration-confetti-1bp.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

// f5cac3 light pink
// ffb4a2 pink