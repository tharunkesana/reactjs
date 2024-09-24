import React from 'react';

const Task = ({ task, index, toggleComplete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(index)}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default Task;