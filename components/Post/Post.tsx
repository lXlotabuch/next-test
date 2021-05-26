import Link from 'next/link';
import { PostStyled, PostLink, Title, Content, BtnPlace } from './PostStyled';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/posts/middlware';
import React from 'react';

interface PostTypes {
  title: string;
  body: string;
  id: string | number;
  withLink: boolean;
}

export const Post: React.FC<PostTypes> = ({ title, body, id, withLink = false }: PostTypes) => {
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    deletePost(id)(dispatch);
  };

  return withLink ? (
    <>
      <PostStyled>
        <Link href={'/posts/[id]'} as={`/posts/${id}`}>
          <PostLink>
            <Title>{title}</Title>
            <hr />
            <Content>{body}</Content>
          </PostLink>
        </Link>
        <BtnPlace>
          <EditIcon />
          <DeleteIcon onClick={handleDeletePost} />
        </BtnPlace>
      </PostStyled>
    </>
  ) : (
    <PostStyled>
      <Title>{title}</Title>
      <hr />
      <Content>{body}</Content>
    </PostStyled>
  );
};
