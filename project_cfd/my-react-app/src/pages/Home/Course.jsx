import React from 'react'
import useQuery from '../../hooks/useQuery'
import { courseService } from '../../services/course'
import Course from '../Course'

export default function CourseHome() {
    const { data: courses, loading } = useQuery(() => {
        return courseService.getList()
    }, [])
    if (loading) return null
    return (
        <section className="section-courseoffline">
            <div className="container">
                <p className="top-des">
                    The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has
                    a more-or-less normal
                </p>
                <div className="textbox">
                    <h2 className="main-title">Khóa học Offline / Online</h2>
                </div>
                <div className="list row">
                    {
                        courses?.map(e => <Course key={e.id} {...e} />)
                    }
                </div>
            </div>
        </section>
    )
}
