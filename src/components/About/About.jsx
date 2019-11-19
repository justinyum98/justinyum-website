import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
  gridContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.gridContainer}>
        <Grid container item xs={12} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Hello, my name is
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Avatar className={classes.avatar}>JY</Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Justin Yum
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              I am a web developer based in San Diego, California.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center" gutterBottom>
              My passion is expressing myself creatively
              <br />
              through coding and music production, which are
              <br />
              two enjoyable pastimes of mine.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Projects
            </Typography>
          </Grid>
          <ProjectsWrapper />
        </Grid>
      </Grid>
    </div>
  );
}
