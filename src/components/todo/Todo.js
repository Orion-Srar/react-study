import css from "./Todo.module.css"

function Todo({todo}) {
    const {id,title} = todo;
    return (
        <div className={css.Todo} >

            <div>{id}.{title}</div>

        </div>
    );
}

export {Todo};

