import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';
import Task from './Task';

const TaskList = ({ tasks }) => {
  const buildTaskList = (tasks) => {
    const taskListArray = tasks.map((task) => {
      return (
        <Task key={task.id} id={task.id} text={task.text} done={task.done} />
      );
    });
    return taskListArray;
  };

  return <ul className="tasks__list no-bullet">{buildTaskList(tasks)}</ul>;
};

{
  /* <Task id={TASKS[0].id} text={TASKS[0].text} done={TASKS[0].done} /> */
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
