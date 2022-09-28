function Comment({comment}) {

    const {id,name,email} = comment;

    return (
        <div>
            <div>{id}.{name}</div>
            <div>{email}</div>
            <hr/>

        </div>
    );
}

export {Comment};
