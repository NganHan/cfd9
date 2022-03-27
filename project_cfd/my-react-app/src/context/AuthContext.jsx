import { createContext, useEffect, useState } from "react";
import { USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import { useService } from "../services/user";
import { clearToken, getToken, setToken } from "../utils/token";

export const AuthContext = createContext()
let _user = localStorage.getItem(USER_STORAGE_KEY)
if(_user){
    _user = JSON.parse(_user)
}
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(_user)


    useEffect(async()=> {
        const token = getToken()
        if(token){
            const user = await useService.getUser()
            console.log(user);
            if(user.data){
                setUser(user.data)
            }
        }
    }, [])



    useEffect(() => {
        if(user){
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
        }else{
            localStorage.removeItem(USER_STORAGE_KEY)
            clearToken()
        }
    }, [user])

    const handleLogin = async (data) => {
        const res = await authService.login(data) //accessToken & refreshToken
        if(res.message){
            console.log(res.message);
            return res.message
        }
        setToken(res.data)
        const user = await useService.getUser()
        // console.log(user)
        setUser(user.data)
    }
    const handleLogout = () => {
        setUser()
    }

    return <AuthContext.Provider value={{user, handleLogin, handleLogout}}>{children}</AuthContext.Provider>
}