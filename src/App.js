import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {CommentsPage, PostsPages, SingleUserPage, UsersPages} from "./pages";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPages/>}/>
                <Route path={'users/:id'} element={<SingleUserPage/>}/>
                <Route path={'posts'} element={<PostsPages/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    );
}

export {App};
