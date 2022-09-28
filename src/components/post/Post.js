import css from './Post.module.css'
import {NavLink} from "react-router-dom";

function Post({post}) {
    const {id,title} = post;



    return (
        <div className={css.Post} >


           <div>id.{id}</div>
           <div>body.{title}</div>
           <NavLink to={id+'/comments'} >Comments</NavLink>

        </div>
    );
}

export {Post};
