import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Grid from '@material-ui/core/Grid';

import InstaPost from '../InstaPost/InstaPost';
import LoadingInstaPosts from '../LoadingInstaPosts/LoadingInstaPosts';

const INSTA_POSTS = gql`
  {
    posts {
      id
      username
      mediaType
      mediaUrl
      likeCount
      caption
      commentsCount
      permalink
    }
  }
`;

function InstaPostsWrapper() {
  const { loading, error, data } = useQuery(INSTA_POSTS);

  if (loading) return <LoadingInstaPosts />;
  if (error) return <p>Error</p>;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="baseline"
      spacing={2}
    >
      {data.posts.map((post) => (
        <Grid item xs={12} sm={12} md={6}>
          <InstaPost key={post.id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default InstaPostsWrapper;
