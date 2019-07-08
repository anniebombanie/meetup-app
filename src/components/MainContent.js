import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import DisplayResults from './DisplayResults.js';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      allEventsData: [],
      isLoading: false,
      hasErrorBadInput: false,
    };
  }

  // sets states when search button is clicked
  handleOnSubmit = data => {
    this.setState({
      // stores API data
      allEventsData: data,
      // changes is loading to true
      isLoading: true,
    });
  };

  render() {
    return (
      <div>
        <SearchForm
          handleOnSubmit={this.handleOnSubmit}
          accessToken={this.props.accessToken}
        />
        {this.state.isLoading && (
          <DisplayResults allEvents={this.state.allEventsData} />
        )}
      </div>
    );
  }
}

export default MainContent;
