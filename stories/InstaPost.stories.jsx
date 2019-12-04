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

const buildImagePost = () => (
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

const buildVideoPost = () => (
  {
    id: faker.random.number(),
    username: faker.internet.userName(),
    profilePictureUrl: faker.image.avatar(),
    mediaType: 'VIDEO',
    mediaUrl: 'https://scontent.xx.fbcdn.net/v/t50.2886-16/66059885_386349038663015_534133694150849667_n.mp4?_nc_cat=105&_nc_ohc=0jovMPfMjtUAQmb2pYZusVg-UBQAJ9wonfIqHZtoblYm2XZ-FAanrJLLA&_nc_ht=scontent.xx&oh=d29a30014cbac5092508484e1453c391&oe=5E7ED561',
    likeCount: faker.random.number(),
    caption: faker.lorem.sentences(),
    commentsCount: faker.random.number(),
    permalink: faker.internet.url(),
  }
);

const imagePost = buildImagePost();
const videoPost = buildVideoPost();


export const defaultImageRendering = () => (
  <InstaPost post={imagePost} />
);

export const defaultVideoRendering = () => (
  <InstaPost post={videoPost} />
);

export const headerRendering = () => (
  <InstaPostHeader
    username={imagePost.username}
    profilePictureUrl={imagePost.profilePictureUrl}
  />
);

export const noPropsHeaderRendering = () => (
  <InstaPostHeader />
);

export const mediaPhotoRendering = () => (
  <InstaPostMedia
    mediaType={imagePost.mediaType}
    mediaUrl={imagePost.mediaUrl}
  />
);

export const mediaVideoRendering = () => (
  <InstaPostMedia
    mediaType={videoPost.mediaType}
    mediaUrl={videoPost.mediaUrl}
  />
);

export const noPropsMediaRendering = () => (
  <InstaPostMedia />
);

export const contentRendering = () => (
  <InstaPostContent
    likeCount={imagePost.likeCount}
    commentsCount={imagePost.commentsCount}
    caption={imagePost.caption}
  />
);

export const noPropsContentRendering = () => (
  <InstaPostContent />
);

export const actionsRendering = () => (
  <InstaPostActions
    permalink={imagePost.permalink}
  />
);
