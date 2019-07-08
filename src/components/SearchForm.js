import React, { Component } from 'react';
import axios from 'axios';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell, Button, Colors } from 'react-foundation';

// // checks that user types something in the search field
// const validText = text => {
//   //returns true if user doesn't type empty spaces
//   return !!text.trim().length;
// };

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      // error: false,
    };
  }

  // watches user input for search term and updates state
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  getEvents = (accessToken, search, data) => {
    console.log('in getEvents');

    accessToken = this.props.accessToken;
    const searchString = this.state.search;

    console.log(accessToken, searchString);

    axios.get(
      console.log('in axios'),
      `https://api.meetup.com/find/upcoming_events?access_token=${accessToken}&text=${searchString}`
    );
    // return data.events;
  };

  const param = await Axios.get(
    `https://api.meetup.com/find/upcoming_events?access_token=${access_token}&text=coffee`
  );

  return param.data.events;
}


  onSubmit = (e, accessToken, search) => {
    e.preventDefault();
    console.log(accessToken, search);
    this.getEvents(accessToken, search);
  };

  // SubmitButton = () => {
  //   return <Button color={Colors.SUCCESS}>Find Events</Button>;
  // };

  render() {
    return (
      <div className="searchForm">
        <form>
          <Grid className="display">
            <Cell>
              <p>You are currently loggedIn yay!</p>
              <label htmlFor="search">
                What kind of meetups are you looking for?
              </label>
              <input
                type="text"
                name="search"
                required="required"
                placeholder="ie. coffee, design, boardgames"
                onChange={this.handleChange}
                value={this.state.search}
              />
            </Cell>
            <Cell>
              <button onClick={this.onSubmit} className="button expanded">
                Find Events
              </button>
            </Cell>
          </Grid>
        </form>
      </div>
    );
  }
}

export default SearchForm;
