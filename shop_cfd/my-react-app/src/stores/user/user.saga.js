import { call, put, select, takeLatest } from "redux-saga/effects";
import { actionfetchUser, userActions } from ".";
import { getToken, setUser } from "../../core/utils/token";
import { userService } from "../../services/userService";

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
export function* userSaga(){
    yield takeLatest(actionfetchUser, fetchUser)
}