import React, { Component, Fragment } from 'react';
// import Foundation from 'react-foundation';
import Header from './components/Header.js';
import Login from './components/Login.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accessToken: null,
      isLoggedIn: false,
    };
  }

  // method to pass to Login.js
  handleLogin = access_token => {
    this.setState({
      accessToken: access_token,
    });
    //only change isLoggedIn to true once accessToken is truthy
    if (this.state.accessToken) {
      this.setState({
        isLoggedIn: true,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        {!this.state.isLoggedIn ? (
          <Login handleLogin={this.handleLogin} />
        ) : (
          <MainContent accessToken={this.state.accessToken} />
        )}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
