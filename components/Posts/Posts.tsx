import React from 'react';
import { PostsWrapper } from './PostsStyled';

const Posts: React.FC = ({ children }) => {
  return <PostsWrapper>{children}</PostsWrapper>;
};

export default Posts;
