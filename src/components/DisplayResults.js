import React, { Component } from 'react';
import EventCard from './EventCard';
import { Grid, Cell, Callout, Colors } from 'react-foundation';

class DisplayResults extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
      isLoading: false,
    };
  }

  render() {
    if (this.props.allEventsData.length === 0) {
      return (
        <Callout color={Colors.ALERT}>
          <p>
            Sorry, your search didn't return any events. Please try a different
            search.
          </p>
        </Callout>
      );
    }
    return this.props.allEventsData.map(event => {
      // unique key is needed for each individual child
      return (
        <div>
          <Grid upOnSmall={1} upOnMedium={2} upOnLarge={4}>
            <Cell isColumn>
              <EventCard
                key={event.id}
                event={event}
                tabIndex="0"
                allEventsData={this.state.event}
                accessToken={this.props.accessToken}
              />
            </Cell>
          </Grid>
        </div>
      );
    });
  }
}

export default DisplayResults;
