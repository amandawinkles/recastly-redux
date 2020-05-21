import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
    videos: state.videos
  }
};
var mapDispatchToProps = (dispatch) => {
  return {};
};

var SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;

/*
var mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
    videos
  }
}
var mapDispatchToProps = (dispatch) => {
  return {};
}

var VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);
*/
