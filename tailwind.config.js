/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'hsl(217, 28%, 15%)',
        darkBlue2: 'hsl(218, 28%, 13%)',
        darkBlue3: 'hsl(216, 53%, 9%)',
        darkBlue4: 'hsl(219, 30%, 18%)',
        outerCyan: 'hsl(176, 68%, 64%)',
        outerBlue :'hsl(198, 60%, 50%)',
        outerRed:'hsl(0, 100%, 63%)'
      }
    },
  },
  plugins: [],
}


// ### Primary

// - Dark Blue (intro and email sign up background): hsl(217, 28%, 15%)
// - Dark Blue (main background): hsl(218, 28%, 13%)
// - Dark Blue (footer background): hsl(216, 53%, 9%)
// - Dark Blue (testimonials background): hsl(219, 30%, 18%)

// ### Accent

// - Cyan (inside call-to-action gradient): hsl(176, 68%, 64%)
// - Blue (inside call-to-action gradient): hsl(198, 60%, 50%)
// - Light Red (error): hsl(0, 100%, 63%)
