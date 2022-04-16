import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isFetchedList: false,
    list: null,
    cache: {}
}

export const {reducer: productReducer, actions: productActions} = createSlice({
    initialState,
    name: 'product',
    reducers:{
        isFetchedList: (state, action) => ({isFetchedList: action.payload}),
        list: (state, action) => ({list: action.payload}),
        cache: (state, action) => ({cache: action.payload})
    }
})



// export const store = createStore(getProductList)