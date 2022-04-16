import { useSearchParams } from "react-router-dom"
import { convertURLToObject } from "../utils/url"

export const useQueryURL = () => {
    const query =  useSearchParams()
    const objUrl = convertURLToObject(query[0].toString())
    // console.log(objUrl);
    return objUrl
}