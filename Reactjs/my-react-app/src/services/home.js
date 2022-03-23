import api from "../constants/api"
export const homeService = {
    review(){
        return api.get('/elearning/v4/review')
    },
    gallery(id){
        return api.get('/elearning/v4/gallery')
    }
}