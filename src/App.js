import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {commentsService, postsService, usersService} from "./serveces";
import {Comments, Posts, Users} from "./components";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        usersService.getAll().then(({data: users}) => {
            dispatch({type: 'USER', payload: users})
        })

    }, [])

    useEffect(()=>{
        postsService.getAll().then(({data:posts}) =>{
            dispatch({type: 'POSTS', payload: posts })
        })
    },[])

        useEffect(()=>{
            commentsService.getAll().then(({data:posts}) =>{
            dispatch({type: 'COMMENTS', payload: posts })
        })
    },[])






    return (
        <div>

            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export {App};




