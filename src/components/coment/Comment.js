import {Link} from "react-router-dom";

function Comment({comment}) {
    const {id, name, email, body, postId} = comment;



    return (<div>
            <hr/>
            <li><Link to={'/posts/' + postId}>postId:{postId}</Link></li>
            <li>id:{id}</li>
            <li>name:{name}</li>
            <li>email:{email}</li>
            <li>body:{body}</li>

            <hr/>
        </div>
    );
}

export {Comment};

