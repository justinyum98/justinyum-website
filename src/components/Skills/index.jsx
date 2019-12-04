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
      <Grid container item xs={12} sm={12} md={8} justify="center" spacing={2}>
        <Grid container item xs={12} sm={4} md={4} direction="column" alignItems="center">
          <Typography variant="h4" gutterBottom>
            =Front-End=
          </Typography>
          <Grid container item direction="column" alignItems="center" spacing={1}>
            {frontEndSkills.map((frontEndSkill) => (
              <Grid item>
                <Typography variant="h6" align="center">
                  {frontEndSkill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={4} md={4} direction="column" alignItems="center">
          <Typography variant="h4" gutterBottom>
            =Back-End=
          </Typography>
          <Grid container item direction="column" alignItems="center" spacing={1}>
            {backEndSkills.map((backEndSkill) => (
              <Grid item>
                <Typography variant="h6" align="center">
                  {backEndSkill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={4} md={4} direction="column" alignItems="center">
          <Typography variant="h4" gutterBottom>
            =Other=
          </Typography>
          <Grid container item direction="column" alignItems="center" alignContent="center" spacing={1}>
            {otherSkills.map((otherSkill) => (
              <Grid item>
                <Typography variant="h6" align="center">
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
