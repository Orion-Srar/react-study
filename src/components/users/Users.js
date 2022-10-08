import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usersService} from "../../serveces";
import {LOAD_USERS} from "../../redux";
import {User} from "../user/User";

function Users() {

    const {users} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        usersService.getAll().then(({data}) => dispatch({type: LOAD_USERS, payload: data}))

    },[])

    return (
        <div>


            {
                users.map(user => <User key={user.id} user={user} />)
            }

        </div>
    );
}

export {Users};

