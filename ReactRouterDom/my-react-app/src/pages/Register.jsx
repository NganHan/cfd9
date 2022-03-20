import React, { useState } from 'react'
import Input from './components/Input'
import './register.scss'

export default function Register() {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const onClick = (ev) => {
        ev.preventDefault();
        const errorObj = {}
        if(!form.userName){
            errorObj.userName = 'Vui long nhap UserName'
        }
        if(!form.phone){
            errorObj.phone = 'Vui long nhap Phone'
        }else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
            errorObj.phone = 'Vui long nhap dung dinh dang Phone'
        }
        if(!form.email){
            errorObj.email = 'Vui long nhap email'
        }else if(! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
            errorObj.email = 'Vui long nhap dung dinh dang Email'
        }
        if(!form.facebook){
            errorObj.facebook = 'Vui long nhap link facebook'
        }
        if(!form.note){
            errorObj.note = 'Vui long nhap Mong muon ca nhan'
        }
        console.log(errorObj);
        setError(errorObj);
        if(Object.keys(errorObj).length === 0){
            alert('thanh cong!');
        }
    }
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ1</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            {/* <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" placeholder="Họ và tên bạn" onChange={ev => form.userName = ev.target.value}/>
                                {error.userName && <p className='error-text'>{error.userName}</p>}
                            </label> */}
                            <Input 
                                label="Họ và tên"
                                onChange={ev => form.userName = ev.target.value}
                                placeholder="Họ và tên bạn"
                                error={error.userName}
                            />
                            {/* <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" placeholder="Số điện thoại" onChange={ev => form.phone = ev.target.value}/>
                                {error.phone && <p className='error-text'>{error.phone}</p>}
                            </label> */}
                            <Input 
                                label="Số điện thoại"
                                onChange={ev => form.phone = ev.target.value}
                                placeholder="Số điện thoại"
                                error={error.phone}
                            />
                            {/* <label>
                                <p>Email<span>*</span></p>
                                <input type="text" placeholder="Email của bạn" onChange={ev => form.email = ev.target.value}/>
                                {error.email && <p className='error-text'>{error.email}</p>}
                            </label> */}
                             <Input 
                                label="Email"
                                onChange={ev => form.email = ev.target.value}
                                placeholder="Email của bạn"
                                error={error.email}
                            />
                            {/* <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" placeholder="https://facebook.com" onChange={ev => form.facebook = ev.target.value}/>
                                {error.facebook && <p className='error-text'>{error.facebook}</p>}
                            </label> */}
                            <Input 
                                label="URL Facebook"
                                onChange={ev => form.facebook = ev.target.value}
                                placeholder="https://facebook.com"
                                error={error.facebook}
                            />
                            <Input.Number
                                label="Số tuổi"
                                onChange={ev => form.age = ev.target.value}
                                placeholder="30"
                                error={error.age}
                            />
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." onChange={ev => form.note = ev.target.value}/>
                                {error.note && <p className='error-text'>{error.note}</p>}
                            </label>
                            <div className="btn main rect" onClick={onClick}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
