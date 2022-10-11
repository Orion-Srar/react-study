function Todo({todo}) {
    const {id,title} = todo;
    return (
        <div>
            {id}.{title}
        </div>
    );
}

export {Todo};

