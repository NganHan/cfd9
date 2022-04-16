import { useState, useEffect } from "react"

export const useQuery = (callback, dependencyList = [], initialValue = {}) => {
    const [data, setData] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [paginate, setPaginate] = useState({})
    useEffect(() => {
        setLoading(true)
        callback()
            .then(res => {
                setData(res?.data)
                setPaginate(res?.paginate)
                setLoading(false)
            })
    }, dependencyList)
    return{
        data,
        loading,
        paginate
    }
}
// export default useQuery;