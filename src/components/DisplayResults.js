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
        <Grid className="display align-center">
          <Cell small={10} medium={8}>
            <Callout color={Colors.ALERT}>
              <p>
                Sorry, your search didn't return any events. Please try a
                different search.
              </p>
            </Callout>
          </Cell>
        </Grid>
      );
    } else {
      return (
        <Grid className="display align-center">
          {this.props.allEventsData.map(event => {
            // unique key is needed for each individual child
            return (
              <div key={this.event.id}>
                <Cell small={10} medium={8}>
                  <EventCard
                    event={event}
                    tabIndex="0"
                    allEventsData={this.state.event}
                    accessToken={this.props.accessToken}
                  />
                </Cell>
              </div>
            );
          })}
        </Grid>
      );
    }
  }
}

export default DisplayResults;
