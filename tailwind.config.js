module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#200000'
      },
      leading: {
        '12': '12rem',
      },
      fontFamily: {
        spartan: ['spartan', 'sans-serif'],
        Noto: ['Noto Sans JP', 'sans-serif'],
        Cormorant: ['Cormorant', 'serif'],
        Baloo: ['Baloo 2', 'cursive'],
        Otomanopee: ['Otomanopee One', 'sans-serif'],
      },
      fontSize:{
        '10xl': '9.5rem',
      },
      borderRadius:{
        '5xl':'5rem',
      },
      height:{
        exact: '91%',
        'h-xl': '26rem'
        
      },
      width:{
        // exact:'50%',
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
