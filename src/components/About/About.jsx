import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Project from '../Project/Project';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1" align="center" gutterBottom>
          Hello, my name is
        </Typography>
        <Avatar className={classes.avatar}>JY</Avatar>
        <Typography variant="h6" align="center" gutterBottom>
          Justin Yum
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          I am a web developer based in San Diego, California.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          My passion is expressing myself creatively
          <br />
          in coding and music production, which are two
          <br />
          enjoyable pastimes of mine.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" align="center" gutterBottom>
          Projects
        </Typography>
        <Project />
      </Box>
    </Box>
  );
}
