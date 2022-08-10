import React from 'react';
import { TodoList } from './components/TodoList';

export function App(){
    return(
        <TodoList todos={[
            {id: 1, nombre: 'Juan'},
            {id: 2, nombre: 'Elver'}
        ]}/>
    )
}