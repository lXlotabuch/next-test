export const SET_OPEN_POST = 'SET_OPEN_POST';
export const SET_OPEN_POST_ERROR = 'SET_OPEN_POST_ERROR';
export const START_OPEN_POST_LOADING = 'START_OPEN_POST_LOADING';
export const STOP_OPEN_POST_LOADING = 'STOP_OPEN_POST_LOADING';
export const SET_COMMENT = 'SET_COMMENT';

export const setOpenPost = (payload) => ({
  type: SET_OPEN_POST,
  payload,
});

export const setError = (payload) => ({
  type: SET_OPEN_POST_ERROR,
  payload,
});

export const startLoading = {
  type: START_OPEN_POST_LOADING,
};

export const stopLoading = {
  type: STOP_OPEN_POST_LOADING,
};

export const setComment = (payload) => ({
  type: SET_COMMENT,
  payload,
});
