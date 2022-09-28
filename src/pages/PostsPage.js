import {Outlet} from "react-router-dom";

import css from "./Posts.module.css"

import {Posts} from "../components";

function PostsPage() {

    return (
        <div className={css.postsModule} >

            <Posts/>
            <Outlet/>

        </div>
    );
}

export {PostsPage};
