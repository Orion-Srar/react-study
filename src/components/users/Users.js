import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../user/User";


function Users() {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    userService.getAll().then(({data}) => {
      setUsers(data)
    })
  },[])

  return (<div>

        {users.map(user => <User user={user} key={user.id}/>)}
    
    </div>
  );
}

export {Users};
