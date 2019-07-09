import React, { Component } from 'react';
import axios from 'axios';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell, Button, Colors } from 'react-foundation';
import { variableDeclarator, validate } from '@babel/types';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      hasErrorNoInput: false,
    };
  }

  validateSearch = () => {
    console.log(this.state.search);
    if (!this.state.search) {
      this.setState({
        hasErrorNoInput: true,
      });
      console.log('inside validate', this.state.hasErrorNoInput);
    }
  };

  // reusable method to watch user input and update state
  handleChange = e => {
    this.setState({
      // in this instance, when user types something in "search", the value they type in is stored in state
      [e.target.name]: e.target.value,
    });
  };

  // make API call
  getEventsData = async () => {
    let res = await axios.get(
      `https://api.meetup.com/find/upcoming_events?access_token=${this.props.accessToken}&text=${this.state.search}`
    );
    // pass response data to handleOnSubmit to store in MainContent.js
    this.props.handleOnSubmit(res.data.events);
  };

  onSubmit = e => {
    // prevent default refresh
    e.preventDefault();
    this.validateSearch();
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
                placeholder="ie. food, design, boardgames"
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
