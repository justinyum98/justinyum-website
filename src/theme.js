import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#ebe2d4',
        light: '#ffffff',
        dark: '#b9b0a3',
        contrastText: '#000000',
      },
      secondary: {
        main: '#c0b8ad',
        light: '#f3eadf',
        dark: '#90887e',
        contrastText: '#000000',
      },
      background: {
        default: '#ebe2d4',
        paper: '#fcfcfc',
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Arial',
        '"Helvetica"',
        'sans-serif',
      ].join(','),
    },
  }),
);

export default theme;
