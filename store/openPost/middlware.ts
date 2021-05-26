import axios from 'axios';
import { setComment, setError, setOpenPost, startLoading, stopLoading } from './action';

const headers = { 'Content-Type': 'application/json' };

export const getOpenPost = (id, server?: boolean) => async (dispatch) => {
  if (!server) dispatch(startLoading);
  axios
    .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
    .then((res) => {
      dispatch(setOpenPost(res.data));
      if (!server) dispatch(stopLoading);
    })
    .catch((err) => {
      dispatch(setError(err));
      if (!server) dispatch(stopLoading);
    });
};

export const sendComment = (body) => async (dispatch) => {
  axios
    .post('https://simple-blog-api.crew.red/comments', body, { headers })
    .then((res) => {
      dispatch(setComment(res.data));
    })
    .catch((err) => console.log(err));
};
