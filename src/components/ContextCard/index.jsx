import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RouteLink from '../RouteLink/RouteLink';

const useStyles = makeStyles({
  card: {
    minWidth: 200,
    marginLeft: 100,
    marginRight: 100,
  },
});

function ContextCard({ mainText, buttonText, route }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
          {mainText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={RouteLink} to={route}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

ContextCard.propTypes = {
  mainText: PropTypes.string,
  buttonText: PropTypes.string,
  route: PropTypes.string,
};

ContextCard.defaultProps = {
  mainText: '',
  buttonText: '',
  route: '/',
};

export default ContextCard;
