import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

function Users() {

    const dispatch = useDispatch();

    const {users, userFromAPI} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {/*{setCurrentUser && setCurrentUser.name}*/}
            {userFromAPI && userFromAPI.name}
            <hr/>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
}

export {Users};

