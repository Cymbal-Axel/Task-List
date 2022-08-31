import React, {Fragment, useState} from 'react';
import { TodoList } from './components/TodoList';

export function App(){
    const [todos, setTodos] = useState([{id: 1, tarea: 'Tarea 1', completed: false}]) 

    return(
        <Fragment>
        <TodoList todos={todos}/>
        <input type="text" placeholder="Nueva tarea" />
        <button>Agregar</button>
        <button>Borrar</button>
        </Fragment>
    )
}