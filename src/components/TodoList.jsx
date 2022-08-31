import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({todos}){
    console.log(todos)
    return(
        <ul>
            {todos.map((todo)=>(
                <TodoItem todo={todo}/>
            ))}
        </ul>
    )
}