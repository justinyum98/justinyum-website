import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';

import InstaPostHeader from './InstaPostHeader';
import InstaPostMedia from './InstaPostMedia';
import InstaPostContent from './InstaPostContent';
import InstaPostActions from './InstaPostActions';

function InstaPost({ post }) {
  const {
    id,
    username,
    profilePictureUrl,
    mediaType,
    mediaUrl,
    likeCount,
    caption,
    commentsCount,
    permalink,
  } = post;

  return (
    <Card id={id}>
      <InstaPostHeader username={username} profilePictureUrl={profilePictureUrl} />
      <InstaPostMedia mediaType={mediaType} mediaUrl={mediaUrl} />
      <InstaPostContent likeCount={likeCount} commentsCount={commentsCount} caption={caption} />
      <InstaPostActions permalink={permalink} />
    </Card>
  );
}

InstaPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    profilePictureUrl: PropTypes.string,
    mediaType: PropTypes.string,
    mediaUrl: PropTypes.string,
    likeCount: PropTypes.number,
    caption: PropTypes.string,
    commentsCount: PropTypes.number,
    permalink: PropTypes.string,
  }),
};

InstaPost.defaultProps = {
  post: null,
};

export default InstaPost;
