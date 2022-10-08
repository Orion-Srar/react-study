import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {CommentsService} from "../../serveces";
import {LOAD_COMMENTS} from "../../redux";
import {Comment} from "../comment/Comment";

function Comments() {

    const {comments} = useSelector(state => state.commentsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        CommentsService.getAll.then(({data}) => dispatch({type: LOAD_COMMENTS, payload: data}))
    }, [])

    return (
        <div>

            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }

        </div>
    );
}

export {Comments};
