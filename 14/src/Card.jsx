import React from 'react';

// BEGIN (write your solution here)
const Card = ({ children }) => {
    return <div className="card">{children}</div>;
  };
  
  Card.Body = ({ children }) => {
    return <div className="card-body">{children}</div>;
  };
  
  Card.Title = ({ children }) => {
    return <h4 className="card-title">{children}</h4>;
  };
  
  Card.Text = ({ children }) => {
    return <p className="card-text">{children}</p>;
  };
  
export default Card;
// END
