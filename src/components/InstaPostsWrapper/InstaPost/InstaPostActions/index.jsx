import React from 'react';
import PropTypes from 'prop-types';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';


const InstaPostActions = ({ permalink }) => (
  <CardActions>
    <Button
      variant="contained"
      startIcon={<InstagramIcon />}
      href={permalink}
    >
      Original Post
    </Button>
  </CardActions>
);

InstaPostActions.propTypes = {
  permalink: PropTypes.string,
};

InstaPostActions.defaultProps = {
  permalink: undefined,
};

export default InstaPostActions;
