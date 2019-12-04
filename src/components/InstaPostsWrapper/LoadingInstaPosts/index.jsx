import React from 'react';
import _ from 'lodash';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

function LoadingInstaPosts() {
  const LoadingInstaPost = () => (
    <Card>
      <CardHeader
        avatar={
          <Skeleton variant="circle" width={40} height={40} />
        }
        title={
          <Skeleton height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={
          <Skeleton height={10} width="40%" />
        }
      />
      <Skeleton variant="rect" height={180} />
      <CardContent>
        <>
          <Skeleton height={10} style={{ marginBottom: 6 }} />
          <Skeleton height={10} width="80%" />
        </>
      </CardContent>
    </Card>
  );

  const posts = [];
  _.times(4, () => {
    posts.push(<LoadingInstaPost />);
  });

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="baseline"
      spacing={2}
    >
      {posts.map((post) => (
        <Grid item xs={12} sm={12} md={6}>
          { post }
        </Grid>
      ))}
    </Grid>
  );
}

export default LoadingInstaPosts;
