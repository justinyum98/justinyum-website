import React from 'react';
import PropTypes from 'prop-types';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import Container from '@material-ui/core/Container';
import theme from '../../theme';

const client = new ApolloClient({
  uri: 'https://vast-anchorage-25029.herokuapp.com/',
});

function Layout({ children }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <SnackbarProvider
            maxStack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Container fixed>
              {children}
            </Container>
          </SnackbarProvider>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
