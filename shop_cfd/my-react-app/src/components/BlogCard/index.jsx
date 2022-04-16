import React from 'react'
import { Link } from 'react-router-dom'
import { BLOG_POST_PATH } from '../../core'

export default function BlogCard({img, time, heading, text}) {
    return (
        <div className="card mb-7">
            {/* Badge */}
            <div className="badge badge-white card-badge">
                <time className="text-uppercase" dateTime="2019-06-20">{time}</time>
            </div>
            {/* Image */}
            <img className="card-img-top" src={img} alt="..." />
            {/* Body */}
            <div className="card-body px-0">
                {/* Heading */}
                <h5>{heading}</h5>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                    {text}
                </p>
                {/* Button */}
                <Link className="btn btn-link stretched-link px-0 text-reset" to={BLOG_POST_PATH}>
                    Read More <i className="fe fe-arrow-right ml-2" />
                </Link>
            </div>
        </div>
    )
}
