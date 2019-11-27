import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Project from '../Project/Project';
import LoadingProjectsOrExperiences from '../LoadingProjectsOrExperiences/LoadingProjectsOrExperiences';

const PROJECTS = gql`
  {
    projects {
      name
      role
      imageUrl
      date
      description
      repoUrl
    }
  }
`;

function ProjectsWrapper() {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <LoadingProjectsOrExperiences />;
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
