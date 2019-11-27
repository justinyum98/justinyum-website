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
          <Typography variant="h4" gutterBottom>
            Front-End
          </Typography>
          <Grid container item direction="column" alignItems="center" spacing={1}>
            {frontEndSkills.map((frontEndSkill) => (
              <Grid item>
                <Typography variant="h6">
                  {frontEndSkill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={4} direction="column" alignItems="center">
          <Typography variant="h4" gutterBottom>
            Back-End
          </Typography>
          <Grid container item direction="column" alignItems="center" spacing={1}>
            {backEndSkills.map((backEndSkill) => (
              <Grid item>
                <Typography variant="h6">
                  {backEndSkill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={4} direction="column" alignItems="center">
          <Typography variant="h4" gutterBottom>
            Other
          </Typography>
          <Grid container item direction="column" alignItems="center" alignContent="center" spacing={1}>
            {otherSkills.map((otherSkill) => (
              <Grid item>
                <Typography variant="h6">
                  {otherSkill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;
