import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import portrait from '../../assets/portrait.jpg';

const useStyles = makeStyles({
  avatar: {
    margin: 20,
    width: 250,
    height: 250,
  },
});

export default function Introduction() {
  const classes = useStyles();

  return (
    <Grid container item xs={12} direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Hello, my name is
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Avatar src={portrait} className={classes.avatar} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Justin Yum
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center" gutterBottom>
          I am a web developer based in
          <br />
          San Diego, California.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center" gutterBottom>
          My passion is expressing myself creatively
          through coding and music production, which are
          two enjoyable pastimes of mine.
        </Typography>
      </Grid>
    </Grid>
  );
}
