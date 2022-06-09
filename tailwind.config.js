module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rankingBg': "url('/src/img/rankingBg.png')"
      },
      fontFamily: {
        'anton':['Anton'],
      },
      height:{
        '900' : '900px',
        '1080' : '1080px',
      },
      width:{
        '1300':'1300px',
      },
      color:{
        'purple-white' : '#644CF9',
        'bg_table' : '#2D384B'
      }
  },
  },
  plugins: [],
}
