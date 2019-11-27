import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  experienceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1000,
  },
  descriptionContainer: {
    flexDirection: 'column',
  },
  image: {
    backgroundColor: 'white',
    borderRadius: 30,
  },
}));

function Experience({ experience }) {
  const {
    companyName, role, imageUrl, date, description, companyUrl,
  } = experience;
  const classes = useStyles();

  return (
    <Grid container item className={classes.experienceContainer}>
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
      <Grid container item>
        <Grid item xs={4}>
          <img alt="loading..." src={imageUrl} className={classes.image} />
        </Grid>
        <Grid container item xs={8} className={classes.descriptionContainer}>
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
            <Button size="small" href={companyUrl}>
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
    companyName: '(Name of the company)',
    role: '(My role at the company)',
    imageUrl: '(URL for the image)',
    date: '(Month Year - Month Year)',
    description: '(Description)',
    companyUrl: '(Company URL here)',
  },
};

export default Experience;
