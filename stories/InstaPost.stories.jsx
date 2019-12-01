import React from 'react';
import * as faker from 'faker';
import InstaPost from '../src/components/InstaPost/InstaPost';
import InstaPostHeader from '../src/components/InstaPostHeader/InstaPostHeader';
import InstaPostMedia from '../src/components/InstaPostMedia/InstaPostMedia';
import InstaPostContent from '../src/components/InstaPostContent/InstaPostContent';
import InstaPostActions from '../src/components/InstaPostActions/InstaPostActions';

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
