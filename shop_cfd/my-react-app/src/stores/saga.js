import {all} from 'redux-saga/effects'
import { authSaga } from './auth/auth.saga.js'
import { userSaga } from './user/user.saga.js'
export default function* rootSaga() {
    yield all([
        authSaga(),
        userSaga()
    ])
}