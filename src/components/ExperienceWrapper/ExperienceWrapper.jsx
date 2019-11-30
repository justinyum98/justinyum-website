import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Experience from '../Experience/Experience';
import LoadingProjectsOrExperiences from '../LoadingProjectsOrExperiences/LoadingProjectsOrExperiences';
import { EXPERIENCE } from '../../graphql/queries';

function ExperienceWrapper() {
  const { loading, error, data } = useQuery(EXPERIENCE);

  if (loading) return <LoadingProjectsOrExperiences sectionType="Experience" />;
  if (error) return <p>Error</p>;

  return (
    <Grid container item xs={12} direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Experience
        </Typography>
      </Grid>
      <Grid container direction="column" alignItems="center" spacing={6}>
        {data.experience.map((experience) => (
          <Experience experience={experience} />
        ))}
      </Grid>
    </Grid>
  );
}

export default ExperienceWrapper;
