import React from 'react';
import { CommentFrom } from './CommentForm/CommentForm';
import { Comment, CommentsTitle, CommentsWrap } from './CommentsStyled';

interface PropsTypes {
  id: string | number;
  comments: [
    {
      id: string | number;
      body: string;
      postId: string | number;
    },
  ];
}

export const Comments: React.FC<PropsTypes> = ({ id, comments }: PropsTypes) => {
  return (
    <CommentsWrap>
      <CommentsTitle>
        Comments <hr />
      </CommentsTitle>
      {comments &&
        Boolean(comments.length) &&
        comments.map((comment) => <Comment key={comment.id}>{comment.body}</Comment>)}
      <CommentFrom postId={id} />
    </CommentsWrap>
  );
};
