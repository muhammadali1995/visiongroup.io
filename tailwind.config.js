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
      },
      fontSize: {
        18: "18px"
      },
      outline: {
        card: "1px solid rgba(0,0,0,.15)",
      },
      boxShadow: {
        nav: '0 3px 5px rgb(0 0 0 / 4%)'
      }
    },
  },
  plugins: [],
}