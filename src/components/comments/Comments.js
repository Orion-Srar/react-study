import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";


import {commentsService} from "../../services";
import {Comment} from "../coment/Comment";

function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.data))
    }, [])
    return (
        <div>

            <Outlet/>

            {comments.map(comment => (<Comment key={comment.id} comment={comment}/>))}
        </div>
    );
}

export {Comments};
