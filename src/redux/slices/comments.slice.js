import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../../services";

let initialState = {
    comments: []
};

const getAll = createAsyncThunk(
    'commentSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await commentsService.getAll();
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.comments = action.payload;
            })

});

const {reducer: commentsReducer} = commentSlice;

const commentsActions = {
    getAll
}

export {
    commentsReducer,
    commentsActions

}