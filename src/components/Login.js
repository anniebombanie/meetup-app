import React, { Component } from 'react';
import popback from 'popback';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell, Button, Colors } from 'react-foundation';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      accessToken: null,
    };
  }

  login = async () => {
    //oAuth key requested from meetup.com specifically for this app
    const key = 'c7q0307j9q682rd677e2v7r841';
    //redirectUri = set in the configuration of oath token; 'http:localhost:3000' while deving and 'https://anniebombanie.github.io/meetup-search/' once deployed
    const redirectUri = 'http://localhost:3000';
    console.log(redirectUri);

    // popback kudos to Jeffrey B [https://www.npmjs.com/package/popback]
    // Opens login in a popup(or tab) and once that popup is redirected back to redirectUri, auto-closes and takes the data passed to it.
    const { access_token } = await popback({
      width: 600,
      height: 600,
      url: `https://secure.meetup.com/oauth2/authorize?client_id=${key}&response_type=token&redirect_uri=${redirectUri}`,
    });
    this.setState({
      accessToken: access_token,
    });
  };

  render() {
    return (
      <Grid className="display">
        <Cell>
          <p>
            <strong>
              This app requires you to have a meetup.com account to access event
              data in your area.
            </strong>
          </p>
          <p>
            Please login below and if you don't have one, you'll be prompted to
            create one to continue. (This will open up a new tab or popup
            depending on your browser.)
          </p>
          <button className="button" onClick={this.login}>
            LogIn via Meetup.com
          </button>
        </Cell>
      </Grid>
    );
  }
}

export default Login;
