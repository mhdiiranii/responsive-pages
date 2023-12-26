/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-gradient': 'linear-gradient(180deg, rgba(237, 244, 252, 0.1) 10%, rgba(4, 32, 44, 0.16) 26%, rgba(4, 32, 44, 0.2) 29%, rgba(4, 32, 44, 0.47) 47% , rgba(4, 32, 44, 0.65) 65% , rgba(4, 32, 44, 0.8) 80% , rgba(4, 32, 44, 0.9) 90% , rgba(4, 32, 44, 1) 100%)',
      },
      screens: {
        'sm': '640px',
        "md":'768px',
        "lg":'1024px',
        "xl":'1280px',
        "xxl":'1440px',
        "tv": '2200px'
      },
      container: {
        screens : {
          sm:'640px',
          md:'768px',
          lg:'1024px',
          xl:'1280px',
          xxl:'1440px',
          tv: '2200px'
        }
      }
    },
  },
  plugins: [],
}