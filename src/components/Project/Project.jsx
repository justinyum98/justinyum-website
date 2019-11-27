import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { GithubCircle } from 'mdi-material-ui';

const useStyles = makeStyles(() => ({
  projectContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1000,
  },
  descriptionContainer: {
    flexDirection: 'column',
  },
}));

function Project({ project }) {
  const {
    name, role, imageUrl, date, description, repoUrl,
  } = project;
  const classes = useStyles();

  return (
    <Grid container item className={classes.projectContainer}>
      <Grid item>
        <Typography variant="h6">
          {name}
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
            <IconButton href={repoUrl}>
              <GithubCircle />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    imageUrl: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    repoUrl: PropTypes.string,
  }),
};

Project.defaultProps = {
  project: {
    name: '(Name of the project)',
    role: '(My role in this project)',
    imageUrl: '(URL for the image)',
    date: '(Month Year - Month Year)',
    description: '(Description)',
    repoUrl: '(Github repo)',
  },
};

export default Project;
