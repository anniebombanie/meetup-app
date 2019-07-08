import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import DisplayResults from './DisplayResults.js';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      allEvents: [],
      isLoading: true,
      hasErrorBadInput: false,
      // error: false,
    };
  }

  handleOnSubmit = data => {
    this.setState({
      allEvents: data,
    });
  };

  render() {
    return (
      <div>
        <SearchForm
          handleOnSubmit={this.handleOnSubmit}
          accessToken={this.props.accessToken}
        />
        <DisplayResults allEvents={this.state.allEvents} />
      </div>
    );
  }
}

export default MainContent;
