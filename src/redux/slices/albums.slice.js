import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {albumService} from "../../services";

let initialState = {
    albums: []
};

const getAll = createAsyncThunk(
    'albumsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await albumService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const albumsSlice = createSlice({
    name: 'albumsSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.albums = action.payload
            })

});

const {reducer: albumReducer} = albumsSlice;

const albumActions = {
    getAll
}

export {
    albumReducer,
    albumActions
}