import api from "../constants/api"

export const useService = {
    getUser(){
        return api.get('/user/get-info')
    }
}