import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../../services";

function UserDetails() {
  const {id}= useParams();

  const [user,setUser] = useState(null);

  useEffect(()=>{
    usersService.getById(id).then(({data})=>setUser(data))
  },[id])


  return (<div>

        {user && JSON.stringify(user)}


    </div>
  );
}

export {UserDetails};
