import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "../coment/Comment";

function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.data))
    }, [])
    return (
        <div>




            {comments.map(comment=>(<Comment key={comment.id} comment={comment} />))}
        </div>
    );
}

export {Comments};
