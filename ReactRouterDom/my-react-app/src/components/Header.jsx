import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Header() {
    const toggleMenu = () => {
        document.body.classList.toggle('menu-is-show');
    }
    return (
        <>

            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={toggleMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    {/* <a href="#" className="logo">
                        <Link to="/" className="logo">
                            <img src="/img/logo.svg" alt="" />
                            <h1>CFD</h1>
                        </Link>
                    </a> */}
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <Link className="info" to="/ca-nhan">
                                    <div className="name">Trần Lê Trọng Nghĩa</div>
                                    <div className="avatar">
                                        <img src="/img/avt.png" alt="" />
                                    </div>
                                </Link>
                          
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link to="/ca-nhan/khoa-hoc">Khóa học của tôi</Link>
                                <Link to="/ca-nhan">Thông tin tài khoản</Link>
                                <Link to="/">Đăng xuất</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
