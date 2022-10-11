import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {todosService} from "../../services";

let initialState ={
    todos: []
};

const getAll = createAsyncThunk(
    'todosSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await todosService.getAll();
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.todos = action.payload;
            })
});

const {reducer:todosReducer} = todosSlice;

const todosActions = {
    getAll
}

export {
    todosReducer,
    todosActions
}