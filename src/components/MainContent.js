import React, { Component } from 'react';
import SearchForm from './SearchForm,js';
import DisplayResults from './DisplayResults.js';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      hasErrorBadInput: false,
      // error: false,
    };
  }

  render() {
    return (
      <div>
        <SearchForm />
        <DisplayResults allEvents={this.state.allEvents} />
      </div>
    );
  }
}

export default MainContent;
