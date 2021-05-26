import { ADD_POST, DELETE_POST, SET_ERROR, SET_POSTS, START_LOADING, STOP_LOADING } from './action';

interface initialState {
  isLoading: boolean;
  error: null | object;
  posts: [{ id: any; title: string; body: string }] | [];
}

const initialState: initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const MODULE_NAME = 'posts';

export const selectPosts = (store) => store[MODULE_NAME].posts;
export const selectIsLoading = (store) => store[MODULE_NAME].isLoading;
export const selectError = (store) => store[MODULE_NAME].error;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...payload, ...state.posts],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(({ id }) => id !== payload),
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
