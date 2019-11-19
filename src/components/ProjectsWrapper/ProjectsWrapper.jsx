import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Grid from '@material-ui/core/Grid';

import Project from '../Project/Project';

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

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      {data.projects.map((project) => (
        <Project project={project} />
      ))}
    </Grid>
  );
}

export default ProjectsWrapper;
