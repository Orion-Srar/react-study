import css from './Header.module.css'
import {Link} from "react-router-dom";

function Header() {


    return (
        <div className={css.Header}>
            <Link to={'/'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/albums'}>Album</Link>
            <Link to={'/comments'}>Comments</Link>
            <Link to={'/todos'}>Todos</Link>
        </div>
    );
}

export {Header};
