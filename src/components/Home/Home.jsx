import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

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
      <Typography component="div" variant="h1" align="center" gutterBottom>
        <Box fontFamily="Monospace" mt={20}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Justin Yum')
                .start();
            }}
          />
        </Box>
      </Typography>
      <Typography component="div" variant="h5" align="center" gutterBottom>
        <Box fontFamily="Monospace">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Developer. Producer. Artist.')
                .start();
            }}
          />
        </Box>
      </Typography>
      <Fade in={fadeOn} timeout={5000}>
        <Box display="flex" justifyContent="center">
          <IconButton href="https://soundcloud.com/jyillamusic">
            <Soundcloud />
          </IconButton>
          <IconButton href="https://www.instagram.com/justinyum98/">
            <Instagram />
          </IconButton>
        </Box>
      </Fade>
    </div>
  );
}
