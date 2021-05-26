import { Backdrop, CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../components/MainLayout';
import { Post } from '../components/Post/Post';
import Posts from '../components/Posts/Posts';
import { initializeStore } from '../store';
import { setError, setPosts } from '../store/posts/action';
import { getPosts } from '../store/posts/middlware';
import { selectIsLoading, selectPosts } from '../store/posts/reducer';

const Home = () => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts()(dispatch);
  }, []);

  if (isLoading) {
    return (
      <MainLayout title="Home Page">
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Home Page">
      <Posts>
        {posts.map((post) => (
          <Post key={post.id} {...post} withLink />
        ))}
      </Posts>
    </MainLayout>
  );
};

Home.getInitialProps = async () => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  // Don't work with axios

  try {
    const res = await fetch('https://simple-blog-api.crew.red/posts');
    const data = await res.json();

    dispatch(setPosts(data));
  } catch (err) {
    dispatch(setError(err));
  }

  return { initialReduxState: reduxStore.getState() };
};

export default Home;
