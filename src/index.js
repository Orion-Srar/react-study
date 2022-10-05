import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";



const usersReducer = (state = {users: []}, action)  => {
    switch (action.type){
        case 'USER':
            return {
                ...state,
                users: action.payload};
    }
    return state;

};

const postsReducer = (state = {posts: []}, action)  => {
    switch (action.type){
        case 'POSTS':
            return {
                ...state,
                posts: action.payload};
    }
    return state;

};

const commentsReducer = (state = {comments: []}, action)  => {
    switch (action.type){
        case 'COMMENTS':
            return {
                ...state,
                comments: action.payload};
    }
    return state;

};

const reducers = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer
});

const store = createStore(reducers);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

