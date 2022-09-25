import {Link,Routes,Route} from "react-router-dom";

import {Posts} from "../posts/Posts";

function Post({post}) {
  const {id,title} = post;
  return (<div>
          <hr/>
        <li>id:{id}</li>
        <li>title:{title}</li>
          <hr/>

    </div>
  );
}

export {Post};
