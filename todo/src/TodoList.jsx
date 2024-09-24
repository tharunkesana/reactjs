import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('All'); 

  const addTask = () => {
    if (title.trim()) {
      setTasks([...tasks, { id: Date.now(), title, description, completed: false }]);
      setTitle('');
      setDescription('');
    } else {
      alert('Task title cannot be empty!');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    const editedTitle = prompt('Enter new task title', taskToEdit.title);
    const editedDescription = prompt('Enter new task description', taskToEdit.description);

    if (editedTitle !== null || editedDescription !== null) {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, title: editedTitle?.trim() || task.title, description: editedDescription?.trim() || task.description }: task
      ));
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    return filter === 'Active' ? tasks.filter(task => !task.completed) :
           filter === 'Completed' ? tasks.filter(task => task.completed) : tasks;
  };

  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <div className="input-container">
        <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="filter-container">
        {['All', 'Active', 'Completed'].map(status => (
          <button key={status} onClick={() => setFilter(status)}>{status}</button>
        ))}
      </div>

      <div className="task-list">
        <h1>Tasks</h1>
        {getFilteredTasks().map((task) => (
          <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-actions">
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? 'Mark as Active' : 'Mark as Completed'}
              </button>
              <button onClick={() => editTask(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
