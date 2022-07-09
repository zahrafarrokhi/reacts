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


  typography: {
    fontFamily: 'IranSans',
    fontSize: 16,
  },


});
theme = createTheme(theme, {

  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'IranSans';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('IranSans'), local('IranSans'), url(${IranSans}) format('ttf');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },

  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: '1rem',
          padding: '.8rem',
          borderRadius: '.6rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-input': {
            paddingTop: '12px',
            paddingBottom: '12px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '.6em',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-input': {
            paddingTop: '12px',
            paddingBottom: '12px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '.6em',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: theme.palette.border.main,
        },
      },

    },
  },

});


theme = responsiveFontSizes(theme);
export default theme;