import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import WebIcon from '@material-ui/icons/Web';

function Experience({ experience }) {
  const {
    companyName, role, imageUrl, date, description, companyUrl,
  } = experience;

  return (
    <Grid container item direction="column" alignItems="center" spacing={3}>
      <Grid container item direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            {companyName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            {role}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item direction="row" justify="center" spacing={2}>
        <Grid container item xs={12} sm={12} md={5} justify="center" alignItems="flex-start">
          <img alt="loading..." src={imageUrl} />
        </Grid>
        <Grid container item xs={10} sm={10} md={6} direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="subtitle1">
              {date}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              startIcon={<WebIcon />}
              href={companyUrl}
            >
              Company Site
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Experience.propTypes = {
  experience: PropTypes.shape({
    companyName: PropTypes.string,
    role: PropTypes.string,
    imageUrl: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    companyUrl: PropTypes.string,
  }),
};

Experience.defaultProps = {
  experience: {
    companyName: undefined,
    role: undefined,
    imageUrl: undefined,
    date: undefined,
    description: undefined,
    companyUrl: undefined,
  },
};

export default Experience;
