import {useState} from "react";

import {Posts, Users} from "./components";
import {postsService} from "./services";

function App() {

    const [posts,setPosts] = useState([]);

    function getUserId(userId) {
        postsService.getAll(userId).then(value => setPosts(value.data))
    }


    return (<div>

            <Posts posts={posts} />
            <Users getUserId={getUserId}/>

        </div>
    );
}

export default App;



