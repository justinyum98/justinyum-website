import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
});

export default function Introduction() {
  const classes = useStyles();

  return (
    <Grid container item xs={12} direction="column" alignItems="center">
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
  );
}
