import React from 'react';

function Task({ index, taskName, deleteTask }) {
  return <div onClick={() => deleteTask(index)}>{taskName}</div>;
}

export default Task;
