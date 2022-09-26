function Post({post}) {
    const {id, title, body} = post;
    return (<div>
            <hr/>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>body:{body}</li>
            <hr/>

        </div>
    );
}

export {Post};
