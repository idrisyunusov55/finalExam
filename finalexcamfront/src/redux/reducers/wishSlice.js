import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishThunk = createAsyncThunk("api/wish", async() => {
    const response = await axios.get("http://localhost:5802/wish")
    return response.data
})

export const postWishThunk = createAsyncThunk("api/postwish", async(data) => {
    const response = await axios.post("http://localhost:5802/wish", data)
    return response.data
})


export const deleteWishThunk = createAsyncThunk("api/deltewish", async(id) => {
    const response = await axios.delete(`http://localhost:5802/wish/${id}`)
    return id
})




export const wishSlice = createSlice({
    name:"wish",
    initialState:{
        wish:[]
    },
    extraReducers:(builder) => {
        builder

        .addCase(getWishThunk.fulfilled, (state, action) => {
            state.wish = action.payload
        })
        .addCase(postWishThunk.fulfilled, (state, action) => {
            state.wish.push(action.payload)
        })
        .addCase(deleteWishThunk.fulfilled, (state, action) => {
            state.wish = state.wish.filter((item) => item._id !== action.payload)
        })
    }
})


export default wishSlice.reducer