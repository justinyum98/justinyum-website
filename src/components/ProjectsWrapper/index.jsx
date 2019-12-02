import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Project from './Project';
import LoadingProjectsOrExperiences from '../LoadingProjectsOrExperiences';
import { PROJECTS } from '../../graphql/queries';

function ProjectsWrapper() {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <LoadingProjectsOrExperiences sectionType="Project" />;
  if (error) return <p>Error</p>;

  return (
    <Grid container item xs={12} direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
            Projects
        </Typography>
      </Grid>
      <Grid container direction="column" alignItems="center" spacing={6}>
        {data.projects.map((project) => (
          <Project project={project} />
        ))}
      </Grid>
    </Grid>
  );
}

export default ProjectsWrapper;
