import React from 'react';
import * as faker from 'faker';
import InstaPost from '../src/components/InstaPostsWrapper/InstaPost';
import InstaPostHeader from '../src/components/InstaPostsWrapper/InstaPost/InstaPostHeader';
import InstaPostMedia from '../src/components/InstaPostsWrapper/InstaPost/InstaPostMedia';
import InstaPostContent from '../src/components/InstaPostsWrapper/InstaPost/InstaPostContent';
import InstaPostActions from '../src/components/InstaPostsWrapper/InstaPost/InstaPostActions';

export default {
  title: 'InstaPost',
};

const buildPost = () => (
  {
    id: faker.random.number(),
    username: faker.internet.userName(),
    profilePictureUrl: faker.image.avatar(),
    mediaType: 'IMAGE',
    mediaUrl: faker.image.imageUrl(),
    likeCount: faker.random.number(),
    caption: faker.lorem.sentences(),
    commentsCount: faker.random.number(),
    permalink: faker.internet.url(),
  }
);

const post = buildPost();

export const defaultRendering = () => (
  <InstaPost post={post} />
);

export const headerRendering = () => (
  <InstaPostHeader
    username={post.username}
    profilePictureUrl={post.profilePictureUrl}
  />
);

export const noPropsHeaderRendering = () => (
  <InstaPostHeader />
);

export const mediaRendering = () => (
  <InstaPostMedia
    mediaType={post.mediaType}
    mediaUrl={post.mediaUrl}
  />
);

export const contentRendering = () => (
  <InstaPostContent
    likeCount={post.likeCount}
    commentsCount={post.commentsCount}
    caption={post.caption}
  />
);

export const actionsRendering = () => (
  <InstaPostActions
    permalink={post.permalink}
  />
);
