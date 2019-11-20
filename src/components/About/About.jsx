import React from 'react';

import Grid from '@material-ui/core/Grid';

import Introduction from '../Introduction/Introduction';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';
import ExperienceWrapper from '../ExperienceWrapper/ExperienceWrapper';

export default function About() {
  return (
    <Grid container direction="column" alignItems="center">
      <Introduction />
      <ProjectsWrapper />
      <ExperienceWrapper />
    </Grid>
  );
}
