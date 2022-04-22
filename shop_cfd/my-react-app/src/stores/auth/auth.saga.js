import { call, delay, put, putResolve, takeLatest } from "redux-saga/effects"
import { actionFetchLogin, actionFetchRegister, actionLogout, authActions } from "."
import {authService} from '../../services/authService'
import {setToken, getToken, clearToken, setUser, USER_STORAGE_KEY} from '../../core/utils/token'
import {userService} from '../../services/userService'
import { actionfetchUser, userActions } from "../user"
import { useNavigate } from "react-router-dom"

function* fetchLogin(action){
    try{
        console.log('fetchLogin1', action);
        // yield putResolve(authActions.statusFetchLogin(true)) //no se thuc hien ngay tai thoi diem do
        const res = yield call(authService.login, action.payload.data)
        console.log(res);
        if(res.message){
            // return yield put(authActions.errorMessage(res.message))
            return action.payload?.error?.(res.message)
        }

        setToken(res.data)
        yield put(actionfetchUser())
        const user = yield call(userService.getInfo)
        setUser(user.data)
        yield put(userActions.setUser(user.data))

        action.payload?.success?.()
    } catch(error){
        console.error(error)
    } finally {
        action.payload?.end?.()
        // yield put(authActions.statusFetchLogin(false))
    }
}
function* logout(action){
    clearToken()
 
    // localStorage.removeItem(USER_STORAGE_KEY)
}
function* fetchRegister(action){
    try{
        const res = yield call(authService.register, action.payload.data)
        if(res.error){
            return action?.payload?.error?.(res.error)
        }
        setToken(res.data)
        yield put(actionfetchUser())
        const user = yield call(userService.getInfo)
        setUser(user.data)
        yield put(userActions.setUser(user.data))

        action.payload?.success?.()

    } finally{
        action.payload?.end?.()
    }
}

export function* authSaga(){ //tu day viet ham lang nghe
    console.log('authSaga1');
    yield takeLatest(actionFetchLogin, fetchLogin) 
    yield takeLatest(actionLogout, logout)
    // takeLatest thuc hien 1 lan va la lan cuoi cung.
    // log actionFetchLogin: auth/fetchLogin
    // no se thuc hien func fetchLogin
    yield takeLatest(actionFetchRegister, fetchRegister)
}