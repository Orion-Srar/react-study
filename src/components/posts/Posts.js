import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postsActions} from "../../redux";
import {Post} from "../post/Post";

function Posts() {

    const dispatch = useDispatch();

    const {posts, currentPost} = useSelector(state => state.postsReducer);


    useEffect(() => {
        dispatch(postsActions.getAll())
    }, [])

    return (
        <div>
            <h3>
                {
                    currentPost && currentPost.body
                }
            </h3>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
}

export {Posts};

