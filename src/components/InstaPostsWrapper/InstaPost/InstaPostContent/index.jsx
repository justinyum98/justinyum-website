import React from 'react';
import PropTypes from 'prop-types';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const InstaPostContent = ({ likeCount, commentsCount, caption }) => (
  <CardContent>
    <Typography variant="subtitle1" gutterBottom>
      {likeCount}
      {' '}
      likes,
      {' '}
      {commentsCount}
      {' '}
      comments
    </Typography>
    <Typography variant="body1">
      { caption }
    </Typography>
  </CardContent>
);

InstaPostContent.propTypes = {
  likeCount: PropTypes.number,
  commentsCount: PropTypes.number,
  caption: PropTypes.string,
};

InstaPostContent.defaultProps = {
  likeCount: undefined,
  commentsCount: undefined,
  caption: undefined,
};

export default InstaPostContent;
