import React from 'react';
import _ from 'lodash';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

function LoadingProjectsOrExperiences() {
  const LoadingData = () => (
    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
      <Skeleton variant="rect" height={30} width={150} style={{ marginBottom: 6 }} />
      <Skeleton variant="rect" height={20} width={70} style={{ marginBottom: 6 }} />
      <Box display="flex" flexDirection="row" justifyContent="center" mt={1}>
        <Box mr={2}>
          <Skeleton variant="rect" height={150} width={150} />
        </Box>
        <Box ml={2}>
          <Skeleton variant="rect" height={10} width={150} style={{ marginBottom: 6 }} />
          <Skeleton variant="rect" height={10} width={150} style={{ marginBottom: 6 }} />
          <Skeleton variant="rect" height={10} width={150} style={{ marginBottom: 6 }} />
          <Skeleton variant="rect" height={10} width={150} style={{ marginBottom: 6 }} />
          <Skeleton variant="rect" height={10} width={150} style={{ marginBottom: 6 }} />
          <Skeleton variant="circle" height={20} width={20} />
        </Box>
      </Box>
    </Box>
  );

  const projects = [];
  _.times(2, () => {
    projects.push(<LoadingData />);
  });

  return (
    <Grid container item xs={12} direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
            Projects
        </Typography>
      </Grid>
      <Grid container direction="column" alignItems="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={12} md={6}>
            { project }
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default LoadingProjectsOrExperiences;
