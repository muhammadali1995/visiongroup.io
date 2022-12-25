module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          450: "#262d3d",
          150: '#ebeced'
        },
        green: {
          450: "#00cc83"
        },
        blue: {
          450: "#204ECF"
        }
      },
      fontSize: {
        18: "18px"
      },
      boxShadow: {
        nav: '0 3px 5px rgb(0 0 0 / 4%)'
      }
    },
  },
  plugins: [],
}