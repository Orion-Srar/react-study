import {Link} from "react-router-dom";

import css from './Header.module.css'

function Header() {

    return (
        <div className={css.Headers}>

            <div><Link to={'/'}>MAIN</Link> </div>
            <div><Link to={'/users'}>USERS</Link> </div>
            <div><Link to={'/posts'}>POSTS</Link> </div>
            <div><Link to={'/comments'}>COMMENTS</Link>  </div>

        </div>
    );
}

export {Header};
