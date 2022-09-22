import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {User} from "../user/User";

function Users({getUserId}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        usersService.getAll().then(({data}) => setUsers(data))

    }, [])

    return (<div>

            {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}

        </div>
    );
}

export {Users};
