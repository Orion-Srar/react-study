import {combineReducers} from "redux";

import {usersReducer} from "../redusers/users.reducer";
import {postsReducer} from "../redusers/posts.reducer";
import {commentsReducer} from "../redusers/comments.reducer";

const reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer
});

export {
    reducer
}