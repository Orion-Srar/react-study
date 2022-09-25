// import {Users} from "./components";
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";

import {Albums, Comments, Home, Posts, Todos, Users} from "./components";


function App() {


    return (
        <div>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/todos'}>Todos</Link></li>
            <li><Link to={'/albums'}>Albums</Link></li>
            <li><Link to={'/comments'}>Comments</Link></li>
            <hr/>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}/>
                <Route path={'posts/:id'} element={<Posts/>}/>
            </Routes>

        </div>

    );
}

export default App;



