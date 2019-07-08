// user types in their country and city in form field
// if not valid type (letters only, no num), return error
// clear error once valid
// if tries to press submit with incorrect input, show error
// if correct, make API call and return categories of events listed in the search param
// user chooses category from dropdown and hits submits
// makes second api call and list all events matching

import React, { Component, Fragment } from 'react';
// import Foundation from 'react-foundation';
import Header from './components/Header.js';
import Login from './components/Login.js';
import SearchForm from './components/SearchForm.js';
import FilterCategories from './components/FilterCategories.js';
import DisplayResults from './components/DisplayResults.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accessToken: null,
      isLoggedIn: false,
      isLoading: true,
    };
  }

  // method to pass to Login.js
  handleLogin = access_token => {
    this.setState({
      isLoggedIn: true,
      accessToken: access_token,
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        {!this.state.isLoggedIn ? (
          <Login handleLogin={this.handleLogin} />
        ) : (
          <Fragment>
            <SearchForm accessToken={this.state.accessToken} />
            <FilterCategories />
            <DisplayResults />
            <Footer />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default App;
