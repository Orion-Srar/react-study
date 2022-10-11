function Comment({comment}) {
    const {id,name,email,body} = comment;
    return (
        <div>
            <hr/>
            <div>{id}.{name}</div>
            <div>email.{email}</div>
            <div>body.{body}</div>
        </div>
    );
}

export {Comment};
