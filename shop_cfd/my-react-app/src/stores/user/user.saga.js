import { call, put, select, takeLatest } from "redux-saga/effects";
import { actionFetchChangePassword, actionFetchUpdateInfo, actionfetchUser, userActions } from ".";
import { getToken, setUser, clearUser } from "../../core/utils/token";
import { userService } from "../../services/userService";
import { actionLogout } from "../auth";

function* fetchUser(){
    try{
        if(getToken()){
            const user = yield call(userService.getInfo)
            setUser(user.data)
            yield put(userActions.setUser(user.data))
        }
    }catch(error){
        console.error(error);
    }
}

function* logout(action){
    yield put(userActions.setUser(null))
    clearUser()
}

function* fetchChangePassword(action){
    try{
        const res = yield call(userService.changePassword, action.payload.data)
        console.log('tessttt');
        if(res.error){
            return action?.payload?.error(res.error)
        }
        action?.payload?.success?.()
    }finally{
        action?.payload?.end?.()
    }
}
function* fetchUpdateInfo(action){
    try{
        const res = yield call(userService.updateInfo, action.payload.data)
        if(res.error){
            return action?.payload?.error(res.error)
        }
        if(res.updateInfo){
            yield put(actionfetchUser())
            action?.payload?.success?.() 
        }
    }finally{
        action?.payload?.end?.()
    }
}


export function* userSaga(){
    yield takeLatest(actionfetchUser, fetchUser)
    yield takeLatest(actionLogout, logout)


    yield takeLatest(actionFetchChangePassword, fetchChangePassword)
    yield takeLatest(actionFetchUpdateInfo, fetchUpdateInfo)
}