import React from 'react';

// BEGIN (write your solution here)
const Card = ({ title = "title", text = "text" }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};
export default Card;
// END
