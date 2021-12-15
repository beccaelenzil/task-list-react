import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';
import Task from './Task';

const TaskList = ({ tasks }) => {
  const renderTasks = (tasks) => {
    const taskList = tasks.map((task) => {
      return (
        <Task key={task.id} id={task.id} text={task.text} done={task.text} />
      );
    });
    return taskList;
  };
  return <ul className="task__list no-bullet">{renderTasks(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TaskList;
