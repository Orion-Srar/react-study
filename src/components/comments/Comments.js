import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentsActions} from "../../redux";
import {Comment} from "../comment/Comment";

function Comments() {

    const dispatch = useDispatch();

    const {comments} = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(commentsActions.getAll())
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
