import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Introduction from '../Introduction';
import ProjectsWrapper from '../ProjectsWrapper';
import ExperienceWrapper from '../ExperienceWrapper';
import Skills from '../Skills';

export default function About() {
  return (
    <Grid container direction="column" alignItems="center">
      <Box width={1} mt={8} mb={12}>
        <Introduction />
      </Box>
      <Box width={1} bgcolor="secondary.main" pt={12} pb={6}>
        <ProjectsWrapper />
      </Box>
      <Box width={1} pt={6} pb={6} bgcolor="secondary.main">
        <ExperienceWrapper />
      </Box>
      <Box width={1} bgcolor="secondary.main" pt={6} pb={12}>
        <Skills />
      </Box>
    </Grid>
  );
}
