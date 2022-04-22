import axios from 'axios'
import { authService } from '../../services/authService'
import { getToken, setToken } from '../utils/token'

const api = axios.create({
    baseURL: import.meta.env.VITE_HOST
})

api.interceptors.request.use((config) => {
    let token = getToken()
    if(token){
        config.headers.Authorization= `Bearer ${token.accessToken}`
    }
    return config
})



api.interceptors.response.use((res) => {
    return res.data
}, async (error) => {
    if(error?.response?.status === 403 && error.response.data.error_code === 'TOKEN_EXPIRED'){
        let token = getToken()
        if(token){
            const res = await authService.refreshToken({
                refreshToken: token.refreshToken
            })
            console.log(res); //accessToken
            if(res.data){
                token.accessToken = res.data.accessToken
                setToken(token)
                return api(error.config)
            }
        }
    }
    return error?.response?.data
})



export default api