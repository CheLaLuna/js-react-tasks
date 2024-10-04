import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
import { useState } from 'react';

const TodoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        task: inputValue,
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleAddTask}>
          <div className="me-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
              className="form-control"
              placeholder="I am going..."
            />
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      </div>
      <div>
        {tasks.map(task => (
          <Item key={task.id} task={task.task} onRemove={() => handleRemoveTask(task.id)} />
        ))}
      </div>
    </div>
  );
};

export default TodoBox;
// END
