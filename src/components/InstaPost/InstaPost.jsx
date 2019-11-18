/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import { FavoriteOutlined } from '@material-ui/icons';
import { Instagram, CommentMultipleOutline } from 'mdi-material-ui';

const useStyles = makeStyles(() => ({
  card: {
    width: 600,
    maxHeight: 900,
  },
  media: {
    width: 600,
  },
  likeIcon: {
    marginRight: 10,
  },
  commentsIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
}));

function InstaPost({ post }) {
  const {
    id, username, mediaType, mediaUrl, likeCount, caption, commentsCount, permalink,
  } = post;
  const classes = useStyles();

  return (
    <Card id={id} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar>JY</Avatar>
        }
        title={username}
      />
      { mediaType === 'IMAGE' ? (
        <CardMedia
          className={classes.media}
          component="img"
          alt="Loading..."
          image={mediaUrl}
        />
      ) : (
        <video className={classes.media} controls>
          <source src={mediaUrl} type="video/mp4" />
        </video>
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <FavoriteOutlined className={classes.likeIcon} />
          { likeCount }
          <CommentMultipleOutline className={classes.commentsIcon} />
          { commentsCount }
        </Typography>
        <Typography variant="body1">
          {caption}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={permalink}>
          <Instagram />
        </Button>
      </CardActions>
    </Card>
  );
}

InstaPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
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
