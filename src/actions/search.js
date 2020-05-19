import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  let options = {
    key: YOUTUBE_API_KEY,
    query: q
  }
  return (dispatch) => {//callback inside to return actions from other files? //return dispatch w/actions?
    searchYouTube(options, (items) => {
      dispatch(changeVideo(items[0])); //CHANGE_VIDEO
      dispatch(changeVideoList(items));
    });
  }
};
//call dispatch with actions

export default handleVideoSearch;

// dispatch.handleVideoSearch(query)