import React, {Fragment, useState, useRef} from 'react';
import { TodoList } from './components/TodoList';
import { v4 as uuid } from 'uuid/v4';

export function App(){
    const [todos, setTodos] = useState([{id: uuid, task: 'Tarea 1', completed: false}]);

    const todoTaskRef = useRef();

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return; // si el input esta vacio, se termina la ejecucion.
        // Y sino ahora hay que agregar esa tarea del input a la lista de TODOS, usando el setTodos.
        //Siempre que haga cambios en el estado, hacer una copia del anterior estado sino react no encontraria el dicho cambio y no va a renderizar.
        //El prevTodos paasado por parametro hace referencia al anterior estado!
        setTodos((prevTodos) => {
            return [...prevTodos, {id, task, completed: false}]
        })
    };

    return(
        <Fragment>
        <TodoList todos={todos}/>
        
        <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
        <button onClick={handleTodoAdd}>Agregar</button>
        <button>Borrar</button>
        </Fragment>
    )
}