import axios from 'axios';
import { addPost, delPost, setError, setPosts, startLoading, stopLoading } from './action';

const headers = { 'Content-Type': 'application/json' };

export const getPosts = (server?: boolean) => async (dispatch) => {
  if (!server) dispatch(startLoading);
  axios
    .get('https://simple-blog-api.crew.red/posts')
    .then((res) => {
      if (res.status === 200) {
        dispatch(setPosts(res.data));
        if (!server) dispatch(stopLoading);
      }
    })
    .catch((err) => {
      dispatch(setError(err));
      if (!server) dispatch(stopLoading);
    });
};

export const addNewPost = (body) => (dispatch) => {
  axios
    .post('https://simple-blog-api.crew.red/posts', body, { headers })
    .then((res) => {
      if (res.status === 200) {
        dispatch(addPost(res.data));
      }
    })
    .catch((err) => console.log(err));
};

export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`https://simple-blog-api.crew.red/posts/${id}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch(delPost(id));
      }
    })
    .catch((err) => console.log(err));
};
