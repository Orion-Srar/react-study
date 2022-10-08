import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postsService} from "../../serveces";
import {LOAD_POSTS} from "../../redux";
import {Post} from "../post/Post";

function Posts() {

    const {posts} = useSelector(state => state.postsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data})=>dispatch({type:LOAD_POSTS, payload: data}))
    }, [])

    return (
        <div>

            {
                posts.map(post => <Post key={post.id} post={post} />)
            }

        </div>
    );
}

export {Posts};
