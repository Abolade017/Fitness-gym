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
        'Baloo-chettan': ['Baloo Chettan 2', 'cursive'],
        Josefin: ['Josefin Slab', 'serif'],
      },
      fontSize: {
        '10xl': '9.5rem',
      },
      borderRadius: {
        '5xl': '5rem',
        '6xl': '6rem',
      },
      height: {
        exact: '91%',
        '5xl': '36rem'

      },
      width: {
        'exact-sm': '54%',
        exact: '56%',
        '5xl': '84rem',
        '4xl': '60rem',
        '6xl': '40rem',
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
