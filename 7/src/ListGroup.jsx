import React from 'react';

// BEGIN (write your solution here)
const ListGroup = ({ children }) => {
  const listItems = React.Children.map(children, (child) => (
    <li className="list-group-item">{child}</li>
  ));

  return (
    <ul className="list-group">
      {listItems}
    </ul>
  );
};

export default ListGroup;
// END
