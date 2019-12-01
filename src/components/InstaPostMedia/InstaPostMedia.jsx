/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@material-ui/core/CardMedia';

const InstaPostMedia = ({ mediaType, mediaUrl }) => (
  <>
    { mediaType === 'IMAGE' ? (
      <CardMedia
        component="img"
        alt="Loading..."
        image={mediaUrl}
      />
    ) : (
      <video controls>
        <source src={mediaUrl} type="video/mp4" />
      </video>
    )}
  </>
);

InstaPostMedia.propTypes = {
  mediaType: PropTypes.string,
  mediaUrl: PropTypes.string,
};

InstaPostMedia.defaultProps = {
  mediaType: 'IMAGE',
  mediaUrl: '',
};

export default InstaPostMedia;
