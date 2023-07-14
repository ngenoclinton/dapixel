module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    screens: {
      'sx': '353px',
      'xs': '475px',
      'sm': {'min': '639px'},
      'md': {'min': '767px'}, 
      'lg': {'min': '1023px'},
      'xg': {'min': '977px'},
      'xl': {'min': '1279px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      colors:{
        primary:'#F9BC6E',
        primaryDark:'#000000',
        primaryWhite:'#FFFFFF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
