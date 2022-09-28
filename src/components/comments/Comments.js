import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {commentsService} from "../../service";
import {Comment} from "../comment/Comment";
import css from "./Comments.module.css"

function Comments() {

    const {id} = useParams();

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        commentsService.getAll(id).then(({data}) => setComments(data))
    },[id])


    return (
        <div className={css.Comments} >

            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        
        </div>
    );
}

export {Comments};
