import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Music() {
  return (
    <Grid container justify="space-evenly" spacing={2}>
      <Grid item>
        <iframe title="question-mark" src="https://open.spotify.com/embed/playlist/6wn4ohSyY4XYbzSn8qnlsC" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
      </Grid>
      <Grid item>
        <iframe title="current-mood" src="https://open.spotify.com/embed/playlist/1XL2FemPhVeUz93X6grAbK" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
      </Grid>
      <Grid item>
        <iframe title="top-songs-2019" src="https://open.spotify.com/embed/playlist/37i9dQZF1EtgalxKMhvoSY" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
      </Grid>
      <Grid item>
        <iframe title="play-funk-john" src="https://open.spotify.com/embed/playlist/4q3n9NCcuKla1tR1oJZ1s7" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
      </Grid>
    </Grid>
  );
}
