import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleComplete }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task!</p>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
