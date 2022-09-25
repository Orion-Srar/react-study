import {useEffect, useState} from "react";

import {postsService} from "../../services";
import {Post} from "../post/Post";

function Posts() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        postsService.getAll().then(({data})=>setPosts(data))
    },[])
  return (
      <div>

          {posts.map(post => (<Post key={post.id} post={post} />))}

    </div>
  );
}

export {Posts};
