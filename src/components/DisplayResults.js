import React, { Component } from 'react';

class DisplayResults extends Component {
  constructor() {
    super();
    this.state = {
      singleEventData: {},
      hasErrorBadInput: false,
      // error: false,
    };
  }

  //display result maps through data and filter for correct info
  //store in state here
  // passes info to EventCard
  // showIsLoading () => {
  //   // if there's nothing returned from the data...
  //   if (this.props.allEventsData === 0) {
  //     <p></p>
  //   }
  // }

  render() {
    return (
      <div>
        <p>Display Results</p>
        {/* if(this.props.results.length === 0) {
          // do something else? maybe loader/error/empty state
        }
        return this.props.results.map((data) => {
          return <EventCard data={data} key={someUniqKeyFromData} />
        }) */}
      </div>
    );
  }
}

export default DisplayResults;
