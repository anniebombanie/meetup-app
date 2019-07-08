import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import DisplayResults from './DisplayResults.js';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      allEventsData: [],
      isLoading: true,
      hasErrorBadInput: false,
    };
  }

  // pass this method to SearchForm so API data can get sent up here
  handleOnSubmit = data => {
    this.setState({
      allEventsData: data,
    });
    console.log('handleOnSubmit', data);
  };

  render() {
    return (
      <div>
        <SearchForm
          handleOnSubmit={this.handleOnSubmit}
          accessToken={this.props.accessToken}
        />
        <DisplayResults allEvents={this.state.allEventsData} />
      </div>
    );
  }
}

export default MainContent;
