import React, { Component } from 'react';
// import axios from 'axios';

class ResultCard extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
    };
  }
  componentDidMount() {
    this.getImages();
  }

  //GET IMAGES CURRENTLY RESULTING IN CORS ERROR: (Reason: CORS header “Access-Control-Allow-Origin” missing)
  // getImages = async () => {
  //   console.log('getImages', this.props.accessToken);
  //   let res = await axios.get(
  //     `https://api.meetup.com/2/member/self/?access_token=${this.props.accessToken}/${this.props.event.group.urlname}/events/${this.props.event.id}/photos`
  //   );
  //   console.log(res);
  // };

  render() {
    return (
      <div className="resultCard">
        {/* <img src={} alt={}> */}
        <h3>Event name {this.props.event.name}</h3>
        {/* <p>Id {this.props.event.id}</p> */}
        <p>Date {this.props.event.local_date}</p>
        <p>Time {this.props.event.local_time}</p>
        {this.props.event.venue && <p>Venue {this.props.event.venue.name}</p>}
        {this.props.event.venue && <p>City {this.props.event.venue.city}</p>}
        <p>
          <a href="{this.props.event.link}">More Info</a>
        </p>
        {/* <p>urlname {this.props.event.group.urlname}</p> */}
      </div>
    );
  }
}

export default ResultCard;
