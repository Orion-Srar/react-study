import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {todosActions} from "../../redux";
import {Todo} from "../todo/Todo";

function Todos() {

    const dispatch = useDispatch();

    const {todos} = useSelector(state => state.todosReducer);

    useEffect(() => {
        dispatch(todosActions.getAll())
    }, [])


    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
}

export {Todos};
