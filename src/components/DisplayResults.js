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

  render() {
    if (this.props.allEventsData.length === 0) {
      return (
        <p>
          Sorry, your search didn't return any events. Please try a different
          search.
        </p>
      );
    }
    return this.props.allEventsData.map(i => {
      // unique key is needed for each individual child
      return <EventCard key={i.id} i={i} tabIndex="0" />;
    });
  }
}

export default DisplayResults;
