import React from 'react'
import { NavLink } from "react-router-dom";
import { CONTACT_PATH, COURSE_PATH, HOME_PATH, PROJECT_PATH, REGISTER_PATH, TEAM_PATH } from '../../constants/path';

export default function Sidebar() {
    const closeMenu = () => {
        document.body.classList.toggle('menu-is-show');
    }
    return (
        <>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <NavLink onClick={closeMenu} to={REGISTER_PATH}>Đăng ký / Đăng nhập</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to={HOME_PATH}>Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to={TEAM_PATH}>CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to={COURSE_PATH}>Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to={PROJECT_PATH}>Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to={CONTACT_PATH}>Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={closeMenu}></div>
        </>
    )
}
