/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';

import RouteLink from '../RouteLink';

const useStyles = makeStyles((theme) => ({
  link: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: 'white',
  },
}));

function MobileNavbar() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <Box display="flex" flexDirection="row-reverse">
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List component="nav">
            <ListItem
              component={RouteLink}
              to="/"
              color="primary"
              className={classes.link}
            >
              Home
            </ListItem>
            <ListItem
              component={RouteLink}
              to="/about"
              color="primary"
              className={classes.link}
            >
              About
            </ListItem>
            <ListItem
              component={RouteLink}
              to="/music"
              color="primary"
              className={classes.link}
            >
              Music
            </ListItem>
            <ListItem
              component={RouteLink}
              to="/posts"
              color="primary"
              className={classes.link}
            >
              Posts
            </ListItem>
            <ListItem
              component={RouteLink}
              to="/contact"
              color="primary"
              className={classes.link}
            >
              Contact
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </Box>
  );
}

export default MobileNavbar;
