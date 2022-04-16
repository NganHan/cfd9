import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    // errorMessage: '',
    // isFetchLogin: false
}


export const actionFetchLogin = createAction('auth/fetchLogin')
export const {reducer: authReducer, actions: authActions} = createSlice({
    initialState,
    name: 'auth',
    reducers:{
        errorMessage: (state, action) => ({errorMessage: action.payload}),
        statusFetchLogin: (state, action) => ({isFetchLogin: action.payload})
    }
})
export const actionLogout = createAction(`${name}/logout`)
export const actionFetchRegister = createAction(`${name}/fetchRegister`)