import { useState, useEffect } from "react"

const useQuery = (callback, dependencyList = [], initialValue = {}) => {
    const [data, setData] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    console.log(data);
    useEffect(() => {
        setLoading(true)
        callback()
            .then(res => {
                setData(res.data.data)
                setLoading(false)
            })
    //   courseService.getList()
    //   .then(res => {
    //     setCourses(res.data.data)
    //   })
    },[])
    return{
        data,
        loading
    }
}
export default useQuery;