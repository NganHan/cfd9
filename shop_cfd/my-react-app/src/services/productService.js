import api from "../core/constants/api"

export const productService = {
    getProduct(query=''){
        return api.get(`/product${query}`)
    },
    getDetail(slug){
        return api.get(`/product?slug=${slug}`)
    }
}