import React from 'react'
import { generatePath, Link, Outlet, useParams } from 'react-router-dom'
import { COURSE_DETAIL_PATH, COURSE_REGISTER_PATH } from '../../constants/path'


export default function Course({slug, short_description, thumbnail, title, id, course_status, teacher}) {
    const detailPath = generatePath(COURSE_DETAIL_PATH, {slug, id})
    // console.log(detailPath);
    const registerPath = generatePath(COURSE_REGISTER_PATH, {id})
    return (
        <>
            <div className="col-md-4 course">
                <div className="wrap">
                    <Link to={detailPath} className="cover">
                        <img src={thumbnail.link} alt="" />
                    </Link>
                    <div className="info">
                        <Link className="name" to={detailPath}>
                            {title}
                        </Link>
                        <p className="des">
                            {short_description}
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="teacher">
                            <div className="avatar">
                                <img src={teacher.avatar.link} alt="" />
                            </div>
                            <div className="name">{teacher.title}</div>
                        </div>
                        <Link to={registerPath} className="register-btn">Đăng Ký</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
