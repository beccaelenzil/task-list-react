import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, text, done }) => {
  const [isDone, setIsDone] = useState(done);
  const [taskText, setTaskText] = useState(text);

  const toggleDone = () => {
    //console.log('toggle Done');
    setIsDone(!isDone);
    //console.log(isDone);
  };

  const buttonClass = isDone ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={toggleDone}
      >
        {/* <button
          onClick={() => {
            setTaskText('hello world');
          }}
        > */}
        {/* change text to hello world
        </button> */}
        {text}
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Task;
