import api from '../constants/api'
export const authService = {
    login(data){
        console.log(data);
        return api.post('/login', data)
    },
    refreshToken(data){
        console.log(data);
        return api.post('/refresh-token', data)
    }
}