// 1. User must login with meetup.com OAuth (so I avoid giving out my personal info + set to user's default city)
// --- Login.js is where we get the access_token.
// --- SearchForm.js needs access to this token to make an API call.
// --- So store access_token as state in App.js so can send to SearchForm.js later
// --- When Login.js gets access_token, send this back to App.js + set isLoggedIn to true in App.js
// 2. Once logged in, conditionally hide login section disappears and show search bar
// 3. User types in search param
// --- handleChange to watch what's being typed
// --- save search string as state in SearchForm.js
// 4. If nothing is typed and user hits submit, don't make API call and display error1
// --- error1 stored in state in SearchForm.js
// 5. If something is typed, make API call but if there are no results matching the search param (ie. []= empty or ERROR), display error2
// --- conditionally render DisplayResults.js but with error2 (stored in state in DisplayResults)
// --- store result of API call as state in App.js to pass to ResultCard.js
// 6. If no errors, displays results (as cards) on page
// --- Filter through API data and pick out selected info needed and save as state= name/date/time/location/img
// --- if no event img, display group img, if no img at all, display placeholder
// --- Map through and
// --- DisplayResults.js renders all the cards
// OTHER
// Persisting the token and detecting expired tokens/refreshing the token

import React, { Component, Fragment } from 'react';
// import Foundation from 'react-foundation';
import Header from './components/Header.js';
import Login from './components/Login.js';
import SearchForm from './components/SearchForm.js';
import DisplayResults from './components/DisplayResults.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allEvents: [],
      accessToken: null,
      isLoggedIn: false,
    };
  }

  // method to pass to Login.js
  handleLogin = access_token => {
    this.setState({
      isLoggedIn: true,
      accessToken: access_token,
    });
  };

  handleOnSubmit = data => {
    this.setState({
      allEvents: data,
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
            <DisplayResults />
          </Fragment>
        )}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
