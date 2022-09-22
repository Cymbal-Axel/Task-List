import React from 'react';

export function TodoItem({ todo, toggleTodo }){
    const {id, task, completed} = todo

    return(
        <li>
            <input type="checkbox" onChange={}/>
            {task}
        </li>
    )
}