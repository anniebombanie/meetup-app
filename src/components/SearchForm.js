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
      hasErrorNoInput: false,
    };
  }

  // watches user input for search term and updates state
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(`in handleChange`, e.target.name, e.target.value, 'OK');
  };

  getEvents = async () => {
    console.log(`getEvents called`);
    console.log('in getEvents', this.props.accessToken, this.state.search);

    const res = await axios.get(
      `https://api.meetup.com/find/upcoming_events?access_token=${this.props.accessToken}&text=${this.state.search}`
    );
    console.log(res, res.data.events);
    return;
  };

  onSubmit = e => {
    e.preventDefault();

    // const accessToken = this.props.accessToken;
    // const search = this.state.search;
    // console.log('onSubmit', accessToken, search);

    this.getEvents();
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
