import React, { Component } from 'react';
import axios from 'axios';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell, Button, Colors } from 'react-foundation';

// checks that user types something in the search field
const validText = text => {
  //returns true if user doesn't type empty spaces
  return !!text.trim().length;
};

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      error: false,
    };
  }

  getEvents = search => {
    axios
      .get(
        `https://api.meetup.com/find/upcoming_events?photo-host=public&page=20&text=${search}&key=7c5630437f1444485339777054181c66`
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const formFieldValidators = {
  //   name: validText,
  //   day: validDay,
  //   month: validMonth,
  //   year: validYear,
  //   city: validText,
  //   country: validText,
  // };

  validateSearchField = e => {
    //get validator function from key-value object (MAP) (store as variable)
    const validator = validText;

    //after field is updated, validate it and see if it returns false
    // if (!validator(e.target.value)) {
    //   //if false, set error form field to true
    //   this.setState({
    //     errors: {
    //       ...this.state.errors,
    //       //if it's value, set to false, if valid, set to true.
    //       [e.target.name]: true,
    //     },
    //   });
    // }

    //React makes synthnic events so after function ends, not garenteed to have access to target anymore. (might have changed) In function so async, we want to make sure we have access to the values at time of invocation. When original function is called.
    const value = e.target.value;
    const name = e.target.name;

    //if using state in setState, then it should be function because you're getting the most recent state at the time it's called because setState is sync and it's not called right away. BEST PRACTICE [So that state doesn't change in between - think radio buttons]
    this.setState(state => ({
      errors: {
        ...state.errors,
        //if it's valid, set to false (don't show error), if not valid, set to true (opposite) BECAUSE to show an error
        [name]: !validator(value),
      },
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.getEvents();
  };

  SubmitButton = () => {
    return <Button color={Colors.SUCCESS}>Find Events</Button>;
  };

  render() {
    return (
      <div className="searchForm">
        <form action="#">
          <Grid className="display">
            <Grid-x className="grid-margin-x">
              <Cell>
                <label htmlFor="search">
                  What kind of meetups are you looking for?
                </label>
                <input
                  type="text"
                  name="search"
                  required="required"
                  placeholder="ie. coffee, design, boardgames"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  value={this.state.searchString}
                />
              </Cell>
              <Cell>
                <button onClick={this.onSubmit} className="button expanded">
                  Find Events
                </button>
              </Cell>
            </Grid-x>
          </Grid>
        </form>
      </div>
    );
  }
}

export default SearchForm;
