function Album({album}) {
    const {id,title} = album;

    return (
        <div>
            {id}.{title}
        </div>
    );
}

export {Album};