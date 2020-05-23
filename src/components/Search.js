import React from 'react';
import store from '../store/store.js';
import handleVideoSearch from '../actions/search.js';

//make functional component now
//pass in handleInputChange through props
//still have props here, but state change gets passed on to the reducer
//props.handleVideoSearch


var Search = ({handleSearchInputChange}) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      //value={this.state.value}
      onChange={(e) => handleSearchInputChange(e.target.value)} //store.dispatch? store.getState? //will send off to reducer //(e) => handleVideoSearch(e.target.value)
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
