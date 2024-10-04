import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
import { useEffect, useState } from 'react';
const TodoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask) return;

    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newTask }),
    });

    const addedTask = await response.json();
    setTasks((prevTasks) => [addedTask, ...prevTasks]);
    setNewTask('');
  };

  const handleFinishTask = async (id) => {
    await fetch(`/api/tasks/${id}/finish`, { method: 'PATCH' });
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, state: 'finished' } : task
      )
    );
  };

  const handleActivateTask = async (id) => {
    await fetch(`/api/tasks/${id}/activate`, { method: 'PATCH' });
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, state: 'active' } : task
      )
    );
  };

  return (
    <div>
      <div className="mb-3">
        <form className="todo-form mx-3" onSubmit={handleAddTask}>
          <div className="d-flex col-md-3">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              required
              className="form-control me-3"
              placeholder="I am going..."
            />
            <button type="submit" className="btn btn-primary">add</button>
          </div>
        </form>
      </div>
      <div className="todo-active-tasks">
        {tasks.filter(task => task.state === 'active').map(task => (
          <Item key={task.id} task={task} onClick={handleFinishTask} />
        ))}
      </div>
      <div className="todo-finished-tasks">
        {tasks.filter(task => task.state === 'finished').map(task => (
          <Item key={task.id} task={task} onClick={handleActivateTask} finished />
        ))}
      </div>
    </div>
  );
};

export default TodoBox;
// END
