import {useSelector} from "react-redux";

function Posts() {

    const {posts} = useSelector(state => state.postsReducer);
    const splice = posts.splice(0,10);

    return (
        <div>
            <h3>POST</h3>

            {
                splice.map(post =>
                <div key={post.id}>

                    {post.id}.{post.title}
                </div>)
            }

        </div>
    );
}

export {Posts};
