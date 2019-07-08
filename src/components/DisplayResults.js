import React, { Component } from 'react';

class DisplayResults extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      hasErrorBadInput: false,
      // error: false,
    };
  }

  map;

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
