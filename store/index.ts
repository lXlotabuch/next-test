import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { MODULE_NAME as postName, reducer as postReducer } from './posts/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { MODULE_NAME as openPostName, reducer as openPostReducer } from './openPost/reducer';

let store;

const rootReducer = combineReducers({
  [postName]: postReducer,
  [openPostName]: openPostReducer,
});

function initStore(initialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}

export const initializeStore = (preloadedState?: object) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
