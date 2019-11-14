import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { FavoriteOutlined } from '@material-ui/icons';
import { Instagram } from 'mdi-material-ui';

const useStyles = makeStyles(() => ({
  card: {
    width: 600,
    maxHeight: 900,
  },
  media: {
    width: 600,
    height: 600,
  },
}));

function InstaPost({
  id, mediaType, mediaUrl, likeCount, caption, permalink,
}) {
  const classes = useStyles();

  return (
    <Card id={id} className={classes.card}>
      { mediaType === 'IMAGE' ? (
        <CardMedia
          className={classes.media}
          component="img"
          alt="Loading..."
          image={mediaUrl}
        />
      ) : (
        <CardMedia
          className={classes.media}
          component="iframe"
          image={mediaUrl}
        />
      )}
      <CardContent>
        <Typography component="h2" variant="h5" gutterBottom>
          <FavoriteOutlined />
          {likeCount}
        </Typography>
        <Typography component="p" variant="body2">
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
  id: PropTypes.string,
  mediaType: PropTypes.string,
  mediaUrl: PropTypes.string,
  likeCount: PropTypes.number,
  caption: PropTypes.string,
  permalink: PropTypes.string,
};

InstaPost.defaultProps = {
  id: '',
  mediaType: '',
  mediaUrl: '',
  likeCount: 0,
  caption: '',
  permalink: '',
};

export default InstaPost;
