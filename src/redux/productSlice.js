import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Status} from "../utils/status";
import axios from "axios";


const initialState  = {
    products: [],
    productsStatus: Status.IDLE,
    productDetail: [],
    productDetailStatus: Status.IDLE
}

export const  getProduct = createAsyncThunk('getproducts', async() => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data
    } catch (error) {
        console.error(error.message)
    }
})
export const  getCategoryProducts = createAsyncThunk('getCategory', async(category) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        return response.data
    } catch (error) {
        console.error(error.message)
    }
})

export const  getDetailProduct = createAsyncThunk('getproduct', async(id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    return response.json()
})

 // Burada addcaseler ile çektiğimiz verinin durumuna göre statusler oluşturup
// ona göre ön tarafta bişeyler yazdırıyoruz }

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder

            .addCase(getProduct.fulfilled, (state, action) => {
                state.productsStatus = Status.SUCCESS;
                state.products = action.payload
            })
            .addCase(getProduct.pending, (state,action) => {
                state.productsStatus = Status.LOADING
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.productsStatus = Status.FAIL
            })
            .addCase(getDetailProduct.pending, (state, action) => {
                state.productDetailStatus = Status.LOADING
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productDetailStatus = Status.SUCCESS;
                state.productDetail = action.payload
            })
            .addCase(getDetailProduct.rejected, (state, action) => {
                state.productDetailStatus = Status.FAIL
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.productsStatus = Status.SUCCESS;
                state.products = action.payload
            })
            .addCase(getCategoryProducts.pending, (state,action) => {
                state.productsStatus = Status.LOADING
            })
            .addCase(getCategoryProducts.rejected, (state, action) => {
                state.productsStatus = Status.FAIL
            })

    }
})


export default productSlice.reducer;
