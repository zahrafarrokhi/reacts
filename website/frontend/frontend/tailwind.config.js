const plugin = require('tailwindcss/plugin');

module.exports = {
 

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#0189FF',
      secondary: '#F9BF1D',
      grayLight: '#CFCFCF',
      gray: '#D9D9D9',
      grayMedium: '#CBCBCB',
      grayDark: '#979797',
      white: '#FFFFFF',
      black: '#000000',
      bg: '#1A1A1A',
      bg2: '#D7D7D7',
      bg3: '#464849',
      bg4: '#FCFCFC',
      bg5: '#1E1E1E',
      bg6: '#565656',

      bgMenu: 'rgba(50, 50, 50, 0.87)',
      border1: 'rgba(255, 255, 255, 0.2)',
      border2: '#D6D5D5',
      stroke1: '#434343',
      stroke2: '#626262',
      stroke3: '#D3D3D3',
      sideColor1: '#6EACE2',
      sideColor2: '#B6DDFF',
      footerbg: '#2F2F2F',
      blueLight: '#E1F6FF',

    },
    extend: {
      fontFamily: {
        iranSansWeb: 'iranSansWeb',
        iranSansMobile: 'iranSansMobile',
        iranSansLight: 'iranSansLight',
        iranSansBold: 'iranSansBold',
        hack: 'HACK',
        hackwin: 'HACKWIN',
        anonymice: 'anonymice',
        anonymiceWin: 'anonymice-win',
      },
     
    },
  },
  

  plugins: [  ],
};