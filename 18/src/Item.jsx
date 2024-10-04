import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onClick, finished }) => {
    return (
      <div className="row">
        <div className="col-1">{task.id}</div>
        <div className="col">
          {finished ? (
            <s><a href="#" className="todo-task" onClick={() => onClick(task.id)}>{task.text}</a></s>
          ) : (
            <a href="#" className="todo-task" onClick={() => onClick(task.id)}>{task.text}</a>
          )}
        </div>
      </div>
    );
};
  
export default Item;
// END
