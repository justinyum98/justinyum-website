import React from 'react';
import PropTypes from 'prop-types';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Instagram } from 'mdi-material-ui';


const InstaPostActions = ({ permalink }) => (
  <CardActions>
    <Button size="small" href={permalink}>
      <Instagram />
    </Button>
  </CardActions>
);

InstaPostActions.propTypes = {
  permalink: PropTypes.string,
};

InstaPostActions.defaultProps = {
  permalink: '',
};

export default InstaPostActions;
