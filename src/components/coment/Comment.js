import {Link} from "react-router-dom";

function Comment({comment}) {
    const {id, name, email, body, postId} = comment;
    return (<div>
            <hr/>
            <li>postId:{postId}</li>
            <li>id:{id}</li>
            <li>name:{name}</li>
            <li>email:{email}</li>
            <li>body:{body}</li>
            <li><Link to={'/posts/' + postId}>Posts</Link></li>

            <hr/>
        </div>
    );
}

export {Comment};

