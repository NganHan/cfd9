import React from 'react'
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const closeMenu = () => {
        document.body.classList.toggle('menu-is-show');
    }
    return (
        <>
            <nav class="nav">
                <ul>
                    <li class="li_login">
                        {/* <a href="#">Đăng ký / Đăng nhập</a> */}
                        <NavLink onClick={closeMenu} to="/register">Đăng ký / Đăng nhập</NavLink>
                    </li>
                    <li>
                        {/* <a href="#">Trang chủ</a> */}
                        <NavLink onClick={closeMenu} to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        {/* <a href="#">CFD Team</a> */}
                        <NavLink onClick={closeMenu} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        {/* <a href="#">Khóa Học</a> */}
                        <NavLink onClick={closeMenu} to="/khoa-hoc">Khóa Học</NavLink>
                    </li>
                    <li>
                        {/* <a href="#">Dự Án</a> */}
                        <NavLink onClick={closeMenu} to="/ca-nhan/du-an">Dự Án</NavLink>
                    </li>
                    <li>
                        {/* <a href="#">Liên hệ</a> */}
                        <NavLink onClick={closeMenu} to="/lien-he">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div class="overlay_nav" onClick={closeMenu}></div>
        </>
    )
}
