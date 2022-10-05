import {useSelector} from "react-redux";

function Comments() {

    const {comments} = useSelector(state => state.commentsReducer);
    const slice = comments.slice(0,10);

    return (
        <div>
            <h3>COMMENTS</h3>

            {
                slice.map(comment => <div key={comment.id} >{comment.name}</div>)
            }

        </div>
    );
}

export {Comments};
