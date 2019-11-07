import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import RouteLink from '../RouteLink/RouteLink';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  link: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: 'black',
    '&:hover': {
      background: '#d8d8d8',
      borderRadius: 10,
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        component="nav"
        className={classes.toolbar}
      >
        <Link
          component={RouteLink}
          to="/"
          variant="button"
          underline="none"
          className={classes.link}
        >
          Home
        </Link>
        <Link
          component={RouteLink}
          to="/about"
          variant="button"
          underline="none"
          className={classes.link}
        >
          About
        </Link>
        <Link
          component={RouteLink}
          to="/music"
          variant="button"
          underline="none"
          className={classes.link}
        >
          Music
        </Link>
        <Link
          component={RouteLink}
          to="/posts"
          variant="button"
          underline="none"
          className={classes.link}
        >
          Posts
        </Link>
        <Link
          component={RouteLink}
          to="/contact"
          variant="button"
          underline="none"
          className={classes.link}
        >
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
}
