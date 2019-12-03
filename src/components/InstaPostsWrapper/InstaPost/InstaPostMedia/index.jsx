/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@material-ui/core/CardMedia';

const InstaPostMedia = ({ mediaType, mediaUrl }) => (
  <>
    { mediaType === 'IMAGE' ? (
      <CardMedia
        component="img"
        alt="Error in loading image."
        src={mediaUrl}
      />
    ) : (
      <CardMedia component="video" controls>
        <source src={mediaUrl} type="video/mp4" />
      </CardMedia>
    )}
  </>
);

InstaPostMedia.propTypes = {
  mediaType: PropTypes.string,
  mediaUrl: PropTypes.string,
};

InstaPostMedia.defaultProps = {
  mediaType: 'IMAGE',
  mediaUrl: undefined,
};

export default InstaPostMedia;
