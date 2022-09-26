import React, {Fragment, useState, useRef, useEffect} from 'react';
import { TodoList } from './components/TodoList';
import { v4 as uuid } from 'uuid'
import { useEffect } from 'react';



export function App(){
    const [todos, setTodos] = useState([{id: 1, task: 'Tarea 1', completed: false}]);

    useEffect(() => {}, [todos])

    const todoTaskRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return; // si el input esta vacio, se termina la ejecucion.
        // Y sino ahora hay que agregar esa tarea del input a la lista de TODOS, usando el setTodos.
        //Siempre que haga cambios en el estado, hacer una copia del anterior estado sino react no encontraria el dicho cambio y no va a renderizar.
        //El prevTodos paasado por parametro hace referencia al anterior estado!
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuid(), task, completed: false}]
        })
        todoTaskRef.current.value = '';
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    return(
        <Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        {/*para leer el input uso el ref */}
        <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
        <button onClick={handleTodoAdd}>Agregar</button>
        <button onClick={handleClearAll}>Borrar</button>
        <div>Te quedan {todos.filter((todo)=> !todo.completed).length} tareas por terminar</div>
        </Fragment>
    )
}