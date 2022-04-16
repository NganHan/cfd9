
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import {configureStore} from '@reduxjs/toolkit'
import { productReducer } from './product'
import { authReducer } from './auth'
import { actionfetchUser, userReducer } from './user'

const saga = createSagaMiddleware()
const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authReducer,
        user: userReducer
    },
    middleware: [saga]
})
saga.run(rootSaga)

store.dispatch(actionfetchUser())


export default store