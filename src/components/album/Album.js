function Album({album}) {

    const {id, title} = album;

    return (
        <div>

            {id}.{title}
            <hr/>
        
        </div>
    );
}

export {Album};
