import { gql } from 'apollo-boost';

const PROJECTS = gql`
  {
    projects {
      name
      role
      imageUrl
      date
      description
      repoUrl
    }
  }
`;

const EXPERIENCE = gql`
  {
    experience {
      companyName
      role
      imageUrl
      date
      description
      companyUrl
    }
  }
`;

const INSTA_POSTS = gql`
  {
    posts {
      id
      username
      profilePictureUrl
      mediaType
      mediaUrl
      likeCount
      caption
      commentsCount
      permalink
    }
  }
`;

export {
  PROJECTS,
  EXPERIENCE,
  INSTA_POSTS,
};
