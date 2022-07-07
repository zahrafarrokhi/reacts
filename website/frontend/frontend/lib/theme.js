import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#3fa9f5',
      contrastText: '#fff',
    },
    secondary: {
      main: '#858fad',
    },
    title: {
      main: '#4a7fbe',
    },
    borderColor: {
      main: '#2773ff',
    },
    border: {
      main: '#d6cfcf',
    },
    background: {
      main: '#eff6ff',
    },
    backgroundGray: {
      main: '#e5e5e5',
    },
    backgroundBlue: {
      main: '#e8f5ff',
    },
    backgroundLightgray: {
      main: '#f4f4f4',
    },
    backgroundAccent: {
      main: '#9fc1ff',
    },

    textDarkBlue: {
      main: '#0f2744',
    },
    textSecondaryDark: {
      main: '#676767',
    },
    textSecondary: {
      main: '#ffffff',
    },
    textPrimary: {
      main: '#ffffff',
    },
    textBlack: {
      main: '#000',
    },
    textWhite: {
      main: 'white',
    },
    textWarning: {
      main: '#e08c0f',
    },
    textDisabled: {
      main: '#4d4d4d',
    },
    textSuccess: {
      main: '#16843b',
    },
    textDanger: {
      main: '#ff0d0d',
    },

    lightgray: {
      main: '#f4f5f8',
    },
    darkgray: {
      main: '#4f4f4f',
    },
    warning: {
      main: '#fff3c8',
    },
    white: {
      main: 'white',
    },
    success: {
      main: '#5aff9280',
    },
    black: {
      main: 'black',
    },
    blue: {
      main: '#276a9c',
    },
    danger: {
      main: '#f05454',
    },
    disabled: {
      main: '#cfcdcd',
    },
    secondaryBorder: {
      main: '#cfcdcd',
    },

    icnSuccess: {
      main: '#15bdb2',
    },
    icnDanger: {
      main: '#ff5b62',
    },

    accentNine: {
      main: '#54d2d2',
    },
    lightBlue: {
      main: '#d5e1eb',
    },
  },



});

theme = responsiveFontSizes(theme);
export default theme;