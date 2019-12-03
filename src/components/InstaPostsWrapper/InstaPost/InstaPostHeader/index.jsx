import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const InstaPostHeader = ({ username, profilePictureUrl }) => (
  <CardHeader
    avatar={
      <Avatar src={profilePictureUrl}>JY</Avatar>
    }
    title={username}
  />
);

InstaPostHeader.propTypes = {
  username: PropTypes.string,
  profilePictureUrl: PropTypes.string,
};

InstaPostHeader.defaultProps = {
  username: undefined,
  profilePictureUrl: undefined,
};

export default InstaPostHeader;
