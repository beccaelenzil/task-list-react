import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Task = ({ id, text, done }) => {
  const [isDone, setIsDone] = useState(done);
  const buttonClass = isDone ? 'tasks__item__toggle--completed' : '';

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  const deleteCallback = (id) => {
    console.log(`Delete Task ${id}`);
  };

  return (
    <li className="tasks__item">
      <button
        onClick={toggleDone}
        className={`tasks__item__toggle ${buttonClass}`}
      >
        {text}
      </button>
      <button
        className="tasks__item__remove button alert pull-right"
        data-testid={`delete button ${id}`}
        onClick={() => deleteCallback(id)}
      >
        <i className="fa fa-times">
          <FontAwesomeIcon icon={faTimes} />
        </i>
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
