import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {Albums, Comments, Posts, Todos, Users} from "./components";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Users/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
            </Route>
        </Routes>

    );
}

export {App};




