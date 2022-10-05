import {useSelector} from "react-redux";

function Users() {

    const state = useSelector(state => state.usersReducer);


    return (
        <div>
            <h3>USERS</h3>

            {
                state.users.map(user =><div key={user.id} >{user.id}.{user.name}</div>)
            }

        </div>
    );
}

export {Users};
