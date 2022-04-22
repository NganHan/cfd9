import api from "../core/constants/api"

export const userService = {
    getInfo(){
        return api.get('/user/get-info')
    },
    changePassword(data){
        console.log("changePassword");
        return api.post('/user/change-password', data)
    },
    updateInfo(data){
        console.log("updateInfo");
        return api.post('/user/update', data)
    }
}