import { Link } from 'react-router-dom';
import React from 'react'
import { REGISTER_PATH } from '../../constants/path'

export default function Action() {
    return (
        <section className="section-action">
            <div className="container">
                <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                <div className="btn main round bg-white">
                    <Link to={REGISTER_PATH}>Đăng ký</Link>
                </div>
            </div>
        </section>
    )
}
