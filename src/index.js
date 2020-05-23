import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import { Provider} from 'react-redux';
// import { Router } from 'react-redux';
// import { Route } from 'react-redux';
import { Router, Route } from 'react-router-dom'
import handleVideoSearch from './actions/search.js';
import store from './store/store.js';
import VideoListContainer from './containers/VideoListContainer.js';
import VideoPlayerContainer from './containers/VideoPlayerContainer.js';
import SearchContainer from './containers/SearchContainer.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

// ReactDOM.render(
//   <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
//   document.getElementById('app')
// );
ReactDOM.render(
  < Provider store = {store}>
     <Router >
      <Route exact path = '/home' component = {App} API_KEY = {YOUTUBE_API_KEY} searchYouTube = {handleVideoSearch}/>
      <Route path = '/videoList' component = {VideoListContainer}/>
      <Route path = '/videoPlayer' component = {VideoPlayerContainer}/>
      <Route path = '/search' component = {SearchContainer}/>
    </Router >
    {/* <App API_KEY = {YOUTUBE_API_KEY} searchYouTube = {handleVideoSearch}/> */}


    {/* <Router >
      <Route exact path ='/home' component = {App} API_KEY = {YOUTUBE_API_KEY} searchYouTube = {handleVideoSearch}/>
      <Route path ='/videoList' component = {VideoListContainer}/>
      <Route path ='/videoPlayer' component = {VideoPlayerContainer}/>
      <Route path ='/search' component = {SearchContainer}/>
    </Router > */}
  </Provider>,


  document.getElementById('app')
);
/*
ReactDOM.render(
  < Provider store = {store}>
    <Router >
      <Route exact path = '/home' component = {App} API_KEY = {YOUTUBE_API_KEY} searchYouTube = {handleVideoSearch}/>
      <Route path = '/videoList' component = {VideoListContainer}/>
      <Route path = '/videoPlayer' component = {VideoPlayerContainer}/>
      <Route path = '/search' component = {SearchContainer}/>
    </Router >
  </Provider>,


  document.getElementById('app')
);

<Router history={history}>
*/
