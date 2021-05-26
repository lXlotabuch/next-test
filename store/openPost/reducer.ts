import {
  SET_COMMENT,
  SET_OPEN_POST,
  SET_OPEN_POST_ERROR,
  START_OPEN_POST_LOADING,
  STOP_OPEN_POST_LOADING,
} from './action';

interface initState {
  isLoading: boolean;
  error: any;
  openPost: {
    comments?: [];
  };
}

const initialState: initState = {
  openPost: {},
  isLoading: false,
  error: null,
};

export const MODULE_NAME = 'openPost';

export const selectOpenPost = (store) => store[MODULE_NAME].openPost;
export const selectIsLoading = (store) => store[MODULE_NAME].isLoading;
export const selectError = (store) => store[MODULE_NAME].error;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_OPEN_POST:
      return {
        ...state,
        openPost: payload,
      };
    case SET_OPEN_POST_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_COMMENT:
      return {
        ...state,
        openPost: {
          ...state.openPost,
          comments: [...state.openPost.comments, payload],
        },
      };
    case START_OPEN_POST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_OPEN_POST_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
