import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { COURSE_CHILD_PATH, INFO_PATH, LOGIN_PATH, REGISTER_PATH} from '../../constants/path';
import { AuthContext } from '../../context/AuthContext';


export default function Header() {
    const { user, handleLogout } = useContext(AuthContext)
    // console.log(user);
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
                    <div className="right">
                        {
                            user ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">{user.name}</div>
                                            <div className="avatar">
                                                <img src={user.avatar} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <Link to={`${INFO_PATH}/${COURSE_CHILD_PATH}`}>Khóa học của tôi</Link>
                                        <a href={INFO_PATH}>Thông tin tài khoản</a>
                                        <a href="#" onClick={handleLogout}>Đăng xuất</a>
                                    </div>
                                </div>
                            ) : (
                                <div className="not-login bg-none">
                                    <Link to={LOGIN_PATH} className="btn-register">Login</Link>
                                    <Link to={REGISTER_PATH} className="btn main btn-open-login">Register</Link>
                                </div>
                            )
                        }

                    </div>
                </div>
            </header>
        </>
    )
}