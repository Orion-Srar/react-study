import {useEffect, useState} from "react";
import {todosService} from "../../service";
import {Todo} from "../todo/Todo";

function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data})=>setTodos(data))
    }, [])

    return (
        <div>

            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}

        </div>
    );
}

export {Todos};
