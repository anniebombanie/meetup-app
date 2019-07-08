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

  render() {
    return (
      <div>
        <p>Display Results</p>
      </div>
    );
  }
}

export default DisplayResults;
