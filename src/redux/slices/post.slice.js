import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";

let initialState = {
    posts: [],
    currentPost: null

};

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data;
        }catch (e) {
            return  rejectWithValue(e.response.data)
        }
    }

);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) =>{
                state.posts = action.payload;
            }),
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload;
        }
    }

});

const {reducer: postsReducer, actions: {setCurrentPost}} = postsSlice;

const postsActions = {
    getAll,
    postsReducer,
    setCurrentPost
}

export {
    postsReducer,
    postsActions
}