import React, { Component } from 'react';
import popback from 'popback';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell, Button, Colors } from 'react-foundation';

class Login extends Component {
  login = async () => {
    //oAuth key requested from meetup.com specifically for this app
    const key = 'c7q0307j9q682rd677e2v7r841';
    //redirectUri = set in the configuration of oath token; 'http://localhost:3000' while deving and 'https://anniebombanie.github.io/meetup-search/' once deployed
    const redirectUri = 'http://localhost:3000';
    console.log(redirectUri);

    // popback kudos to Jeffrey B [https://www.npmjs.com/package/popback]
    // Opens login in a popup(or tab) and once that popup is redirected back to redirectUri, auto-closes and takes the data passed to it.
    const param = await popback({
      width: 600,
      height: 600,
      url: `https://secure.meetup.com/oauth2/authorize?client_id=${key}&response_type=token&redirect_uri=${redirectUri}`,
    });
    // pass param.access_token up to App.js
    // need param because otherwise, will return key-value pair instead of just value
    this.props.handleLogin(param.access_token);
    console.log(key);
  };

  render() {
    return (
      <Grid className="display align-center">
        <Cell className="text-small-centered" small={10} medium={8}>
          <p>
            <strong>
              This app requires you to have a meetup.com account to access event
              data in your area.
            </strong>
          </p>
          <p>
            Please login below and if you don't have an account, you'll be
            prompted to create one to continue. (This will open up a new tab or
            popup depending on your browser.)
          </p>
          <form className="text-center">
            <button
              className="button small-expanded"
              onClick={() => {
                this.login();
                this.props.handleLogin();
              }}
            >
              LogIn via Meetup.com
            </button>
          </form>
        </Cell>
      </Grid>
    );
  }
}

export default Login;
