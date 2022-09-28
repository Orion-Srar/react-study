import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from "./MainLayout.module.css"

function MainLayout() {

    return (
        <div className={css.meinLayout} >
            <Header/>
            <div className={css.content} ><Outlet/></div>
        </div>
    );
}

export {MainLayout};
