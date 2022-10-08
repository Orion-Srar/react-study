import {Link} from "react-router-dom";

function User({user}) {

    return (
        <div>

            <div>
                {user.id}.{user.name}
            </div>
            <div>
                <Link to={user.id.toString()}>Single User</Link>
            </div>

        </div>
    );
}

export {User};
