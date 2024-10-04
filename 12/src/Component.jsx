import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
import { useState } from 'react';
const Component = () => {
    const [log, setLog] = useState([]);
  
    const handleAdd = () => {
      const lastValue = get(log, [0], 0);
      const newValue = lastValue + 1;
      setLog([{ id: uniqueId(), value: newValue }, ...log]);
    };
  
    const handleSubtract = () => {
      const lastValue = get(log, [0], 0);
      const newValue = lastValue - 1;
      setLog([{ id: uniqueId(), value: newValue }, ...log]);
    };
  
    const handleDelete = (id) => {
      setLog(log.filter(item => item.id !== id));
    };
  
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={handleAdd}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={handleSubtract}>-</button>
        </div>
        <div className="list-group">
          {log.map(item => (
            <button
              key={item.id}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => handleDelete(item.id)}
            >
              {item.value}
            </button>
          ))}
        </div>
      </div>
    );
};
  
export default Component;
// END
