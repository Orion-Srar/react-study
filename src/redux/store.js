import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.slice";
import {postsReducer} from "./slices/post.slice";
import {albumReducer} from "./slices/albums.slice";
import {commentsReducer} from "./slices/comments.slice";
import {todosReducer} from "./slices/todos.slice";

const rootReducer = combineReducers({
    userReducer,
    postsReducer,
    albumReducer,
    commentsReducer,
    todosReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

export {
    setupStore
}