import React, {Fragment, useState, useRef} from 'react';
import { TodoList } from './components/TodoList';

export function App(){
    const [todos, setTodos] = useState([{id: 1, task: 'Tarea 1', completed: false}]) 


    const handleTodoAdd = () => {

    }
    return(
        <Fragment>
        <TodoList todos={todos}/>
        
        <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
        <button onClick={handleTodoAdd}>Agregar</button>
        <button>Borrar</button>
        </Fragment>
    )
}