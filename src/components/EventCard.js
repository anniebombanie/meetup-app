import React from 'react';

let ResultCard = props => {
  return (
    <div className="resultCard">
      <p>Event Card</p>
      <h3>{props.event.group.name}</h3>
      <p>{props.event.id}</p>
    </div>
  );
};

export default ResultCard;
