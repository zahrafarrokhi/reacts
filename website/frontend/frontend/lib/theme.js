import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
  palette: {
    white: {
      main: '#fff',
    },
    bgGray: {
      main: '#D7D7D7',
    },
    black: {
      main: '#000',
    },
    yellow: {
      main: '#d0cd0c',
    },
    success: {
      main: '#B6DDFF',
    },
  },



});

theme = responsiveFontSizes(theme);
export default theme;