import React, { Component } from 'react';
import EventCard from './EventCard';

class DisplayResults extends Component {
  constructor() {
    super();
    this.state = {
      event: [],
      hasErrorBadInput: false,
    };
  }

  filterAll;
  // map through data and filter for correct info
  //store in state here
  // passes info to EventCard
  // showIsLoading () => {
  //   // if there's nothing returned from the data...
  //   if (this.props.allEventsData === 0) {
  //     <p></p>
  //   }
  // }

  render() {
    if (this.props.allEventsData.length === 0) {
      return (
        <p>
          Sorry, your search didn't return any events. Please try a different
          search.
        </p>
      );
    }
    return this.props.results.map(data => {
      return (
        <EventCard event={this.state.event} eventID={this.state.event.id} />
      );
    });
  }
}

export default DisplayResults;
