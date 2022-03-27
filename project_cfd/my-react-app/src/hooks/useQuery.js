import { useState, useEffect } from "react"

const useQuery = (callback, dependencyList = [], initialValue = {}) => {
    const [data, setData] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        callback()
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    },[])
    return{
        data,
        loading
    }
}
export default useQuery;