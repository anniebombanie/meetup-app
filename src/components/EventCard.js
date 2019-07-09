import React from 'react';

let ResultCard = props => {
  return (
    <div className="resultCard">
      <h3>Event name {props.event.name}</h3>
      <p>Id {props.event.id}</p>
      <p>Date {props.event.local_date}</p>
      <p>Time {props.event.local_time}</p>
      {props.event.venue && <p>Venue {props.event.venue.name}</p>}
      {props.event.venue && <p>City {props.event.venue.city}</p>}
      <p>More Info {props.event.link}</p>
      <p>urlname {props.event.group.urlname}</p>
    </div>
  );
};

export default ResultCard;
