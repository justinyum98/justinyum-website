import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';

import { Instagram, Soundcloud } from 'mdi-material-ui';

export default function Home() {
  const [fadeOn, setFadeOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOn(true);
    }, 4000);
  });

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            <Box fontFamily="Monospace" mt={20}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Justin Yum')
                    .start();
                }}
              />
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            <Box fontFamily="Monospace">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Developer. Producer. Artist.')
                    .start();
                }}
              />
            </Box>
          </Typography>
        </Grid>
        <Fade in={fadeOn} timeout={5000}>
          <Grid item xs={12}>
            <IconButton href="https://soundcloud.com/justin-yum">
              <Soundcloud />
            </IconButton>
            <IconButton href="https://www.instagram.com/justinyum98/">
              <Instagram />
            </IconButton>
          </Grid>
        </Fade>
      </Grid>
    </div>
  );
}
