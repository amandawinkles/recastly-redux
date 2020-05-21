import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const store = createStore(
    rootReducer,
    exampleVideoData,
    applyMiddleware(thunk)
  );
  //initialState

  //let initialState = { currentVideo, videoList }

/*
export default const store =
  return createStore()
*/

export default store;







