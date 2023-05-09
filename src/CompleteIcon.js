import React from 'react'
import { ToDoIcon } from "./ToDoIcon";

function CompleteIcon({ completed, onComplete }) {
    return (
        <ToDoIcon
            type='check'
            color={completed ? 'green': 'grey'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }
