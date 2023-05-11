import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';

function ToDoCounter() {
  const {
    completedToDos,
    totalToDos
  } = React.useContext(ToDoContext)

    return(
      <h1 className="ToDoCounter">
        Has completado <span>{completedToDos}</span> de <span>{totalToDos}</span> ToDo's
      </h1>
    );
  }

  export { ToDoCounter };