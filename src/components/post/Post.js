import {useDispatch} from "react-redux";

import {postsActions} from "../../redux";

function Post({post}) {
    const {id,title} = post;

    const dispatch = useDispatch();


    return (
        <div>
            {id}.{title}
            <button onClick={()=>dispatch(postsActions.setCurrentPost(post))}>Body title</button>
            <hr/>
        </div>
    );
}

export {Post};
