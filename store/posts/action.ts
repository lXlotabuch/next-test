export const SET_POSTS = 'SET_POSTS';
export const SET_ERROR = 'SET_ERROR';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});

export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});

export const delPost = (payload) => ({
  type: DELETE_POST,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const startLoading = {
  type: START_LOADING,
};

export const stopLoading = {
  type: STOP_LOADING,
};
