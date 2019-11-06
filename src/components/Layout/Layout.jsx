import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import theme from '../../theme';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container fixed>
          {children}
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
