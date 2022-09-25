import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import {User} from "../user/User";

function Users() {
    const [users, setUsers] = useState([]);


    useEffect( () => {
        usersService.getAll().then(({data}) => (
        setUsers(data)
        ) )
    }, [])

    return (
        <div>
            {users.map(user=>(<User user={user} key={user.id} /> ))}
        </div>
    );
}

export {Users};