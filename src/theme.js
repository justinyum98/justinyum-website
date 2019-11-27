import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#000000',
        light: '#2c2c2c',
        dark: '#000000',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#212121',
        light: '#484848',
        dark: '#000000',
        contrastText: '#ffffff',
      },
    },
    typography: {
      fontFamily: [
        'Josefin Sans',
        'Open Sans',
      ].join(','),
      h1: {
        fontFamily: ['Josefin Sans'].join(','),
      },
      h2: {
        fontFamily: ['Josefin Sans'].join(','),
      },
      h3: {
        fontFamily: ['Josefin Sans'].join(','),
      },
      h4: {
        fontFamily: ['Opens Sans'].join(','),
      },
      h5: {
        fontFamily: ['Open Sans'].join(','),
      },
      h6: {
        fontFamily: ['Open Sans'].join(','),
      },
      subtitle1: {
        fontFamily: ['Open Sans'].join(','),
      },
      subtitle2: {
        fontFamily: ['Open Sans'].join(','),
      },
      body1: {
        fontFamily: ['Open Sans'].join(','),
      },
      body2: {
        fontFamily: ['Open Sans'].join(','),
      },
      button: {
        fontFamily: ['Open Sans'].join(','),
      },
      caption: {
        fontFamily: ['Open Sans'].join(','),
      },
      overline: {
        fontFamily: ['Open Sans'].join(','),
      },
    },
  }),
);

export default theme;
