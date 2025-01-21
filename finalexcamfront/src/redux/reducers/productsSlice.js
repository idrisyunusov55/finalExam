import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk("api/products", async() => {
    const response = await axios.get("http://localhost:5802/product")
    return response.data
})
export const postProductsThunk = createAsyncThunk("api/postproducts", async(data) => {
    const response = await axios.post("http://localhost:5802/product", data)
    return response.data
})
export const deleteProductsThunk = createAsyncThunk("api/delteproducts", async(id) => {
    const response = await axios.delete(`http://localhost:5802/product/${id}`)
    return id
})




export const productsSlice = createSlice({
    name:"products",
    initialState:{
        products:[]
    },
    extraReducers:(builder) => {
        builder

        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.products = action.payload
        })
        .addCase(postProductsThunk.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        .addCase(deleteProductsThunk.fulfilled, (state, action) => {
            state.products = state.products.filter((item) => item._id !== action.payload)
        })
    }
})


export default productsSlice.reducer