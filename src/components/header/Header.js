import {NavLink} from "react-router-dom";

import css from "./Header.module.css"

function Header() {

    return (
        <div className={css.Header} >

            <NavLink to={'albums'} >ALBUMS</NavLink>
            <NavLink to={'posts'} >POSTS</NavLink>
            <NavLink to={'todos'} >TODOS</NavLink>

        </div>
    );
}

export {Header};
