import { Backdrop, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comments } from '../../components/Comments/Comments';
import { MainLayout } from '../../components/MainLayout';
import { Post } from '../../components/Post/Post';
import Posts from '../../components/Posts/Posts';
import { initializeStore } from '../../store';
import { setError, setOpenPost } from '../../store/openPost/action';
import { getOpenPost } from '../../store/openPost/middlware';
import { selectIsLoading, selectOpenPost } from '../../store/openPost/reducer';

const PostPage = () => {
  const post = useSelector(selectOpenPost);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { query } = useRouter();

  useEffect(() => {
    getOpenPost(query.id)(dispatch);
  }, [query]);

  if (isLoading) {
    return (
      <MainLayout>
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={post?.title}>
      <Posts>
        <Post {...post} />
      </Posts>
      <Comments {...post} />
    </MainLayout>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  // Don't work with axios

  try {
    const res = await fetch(`https://simple-blog-api.crew.red/posts/${query.id}?_embed=comments`);
    const data = await res.json();

    dispatch(setOpenPost(data));
  } catch (err) {
    dispatch(setError(err));
  }

  return { initialReduxState: reduxStore.getState() };
};

export default PostPage;
