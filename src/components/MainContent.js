import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import DisplayResults from './DisplayResults.js';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      allEventsData: [],
      displayResults: false,
      isLoading: true,
    };
  }

  // sets states when search button is clicked
  handleOnSubmit = data => {
    this.setState({
      // stores API data
      allEventsData: data,
      displayResults: true,
      isLoading: false,
    });
    console.log(data);
  };

  render() {
    return (
      <div>
        <SearchForm
          handleOnSubmit={this.handleOnSubmit}
          accessToken={this.props.accessToken}
        />
        {this.state.displayResults &&
          (this.state.isLoading ? (
            <p>Getting your results...</p>
          ) : (
            <DisplayResults
              allEventsData={this.state.allEventsData}
              accessToken={this.props.accessToken}
            />
          ))}
      </div>
    );
  }
}

export default MainContent;
