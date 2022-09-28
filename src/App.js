import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {AlbumsPage, CommentsPage, PostsPage, TodosPage} from "./pages";

function App() {

    return (
        <div>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id/comments'} element={<CommentsPage/>}/>
                    </Route>
                    <Route path={'todos'} element={<TodosPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export {App};






