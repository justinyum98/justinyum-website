import React from 'react';
import PropTypes from 'prop-types';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FavoriteOutlined } from '@material-ui/icons';
import { CommentMultipleOutline } from 'mdi-material-ui';

const InstaPostContent = ({ likeCount, commentsCount, caption }) => (
  <CardContent>
    <Typography variant="h6" gutterBottom>
      <FavoriteOutlined />
      { likeCount }
      <CommentMultipleOutline />
      { commentsCount }
    </Typography>
    <Typography variant="body1">
      {caption}
    </Typography>
  </CardContent>
);

InstaPostContent.propTypes = {
  likeCount: PropTypes.number,
  commentsCount: PropTypes.number,
  caption: PropTypes.string,
};

InstaPostContent.defaultProps = {
  likeCount: 0,
  commentsCount: 0,
  caption: '',
};

export default InstaPostContent;
