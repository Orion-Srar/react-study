import {useEffect, useState} from "react";

import User from "../User/User";
import {getUsers} from "../../services/user.api.service";

function Users() {

    let [users,setUsers] = useState([]);
    let [user,setUser] = useState(null);

    const lift = (inf) => {
        setUser(inf);
    };

    useEffect(() => {
        getUsers().then(value => {setUsers(value);});
    },[])

  return (<div>

          <div>
              {
                  user && <div>
                      email: {user.email}<br/>
                  address:<br/>
                      street: {user.address.street}<br/>
                      suite: {user.address.suite}<br/>
                  </div>
              }
          </div>

          {
              users.map(user => <User user={user} key={user.id} lift={lift} />)
          }

    </div>
  );
}

export default Users;

