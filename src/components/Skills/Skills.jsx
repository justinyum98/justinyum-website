import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Skills() {
  const frontEndSkills = ['JavaScript', 'React', 'Material-UI', 'Angular', 'HTML', 'CSS'];
  const backEndSkills = ['NodeJS', 'GraphQL', 'HTTP & REST API'];
  const otherSkills = ['Git', 'Scrum'];

  return (
    <Grid container item xs={12} direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Skills
        </Typography>
      </Grid>
      <Grid container item xs={6} justify="center">
        <Grid container item xs={4} direction="column" alignItems="center">
          <Typography variant="h6" gutterBottom>
            Front-End
          </Typography>
          <Grid container item direction="column" alignItems="center">
            {frontEndSkills.map((frontEndSkill) => (
              <Typography variant="body1">
                {frontEndSkill}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={4} direction="column" alignItems="center">
          <Typography variant="h6" gutterBottom>
            Back-End
          </Typography>
          <Grid container item direction="column" alignItems="center">
            {backEndSkills.map((backEndSkill) => (
              <Typography variant="body1">
                {backEndSkill}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={4} direction="column" alignItems="center">
          <Typography variant="h6" gutterBottom>
            Other
          </Typography>
          <Grid container item direction="column" alignItems="center">
            {otherSkills.map((otherSkill) => (
              <Typography variant="body1">
                {otherSkill}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;
