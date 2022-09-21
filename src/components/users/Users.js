import {useEffect, useState} from "react";

import {postsService, usersService} from "../../services";
import {User} from "../user/User";
import {Post} from "../post/Post";
import css from './Users.module.css';


function Users() {

  const [users,setUsers] = useState([]);
  const [user,setUser] = useState({});
  const [posts,setPosts] = useState(null);


  const lift = (user) => {
    setUser(user)
  }



  useEffect(()=>{
    postsService.getAll(user.id).then(posts=>{
      setPosts(posts.data)
    })
  },[user])



  useEffect(()=>{
    usersService.getAll().then(({data}) => {
      setUsers(data)
    })
  },[])

  return (<div className={css.Users}>

        <div className={css.name}>{users.map(user => <User user={user} key={user.id} lift={lift}/>)}</div>

        <div className={css.post}>{posts?.map((post,index)=> <Post key={index} post={post} /> )}</div>

    </div>
  );
}

export {Users};
