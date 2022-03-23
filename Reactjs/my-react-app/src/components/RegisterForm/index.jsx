import React, { useState } from 'react'
import styles from './style.module.scss'

export function RegisterForm() {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const onClick = (ev) => {
        ev.preventDefault();
        const errorObj = {}
        if(!form.username){
            errorObj.username = 'User khong dc bo trong'
        }
        if(!form.phone){
            errorObj.phone = 'Phone khong dc bo trong'
        }
        else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
            errorObj.phone = 'Phone ko dung dinh dang'
        }
        if(!form.email){
            errorObj.email = 'Email khong dc bo trong'
        }
        if(!form.facebook){
            errorObj.facebook = 'Facebook khong dc bo trong'
        }
        console.log(errorObj);
        setError(errorObj)
        if(Object.keys(errorObj).length === 0){ //lay tat ca key cua obj thanh 1 arr
            alert('Thanh Cong!')
        }
    }
    return (
        <section className={styles['register-course']}>
            <h1 className="title">ĐĂNG KÝ</h1>
            <form action="">
                <label>
                    <p>Họ và tên<span>*</span></p>
                    <input type="text" placeholder='Họ và tên bạn' onChange={ev => form.username = ev.target.value}/>
                    {error.username && <p className='error-text'>{error.username}</p>}
                </label>
                <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" placeholder='Số điện thoại' onChange={ev => form.phone = ev.target.value}/>
                    {error.phone && <p className='error-text'>{error.phone}</p>}
                </label>
                <label>
                    <p>Email<span>*</span></p>
                    <input type="text" placeholder='Email của bạn' onChange={ev => form.email = ev.target.value}/>
                    {error.email && <p className='error-text'>{error.email}</p>}
                </label>
                <label>
                    <p>URL facebook<span>*</span></p>
                    <input type="text" placeholder='https://www.facebook.com/' onChange={ev => form.facebook = ev.target.value}/>
                    {error.facebook && <p className='error-text'>{error.facebook}</p>}
                </label>
                <label>
                    <p>Ý kiến cá nhân</p>
                    <textarea type="text" placeholder='Note' onChange={ev => form.note = ev.target.value}/>
                    {error.note && <p className='error-text'>{error.note}</p>}
                </label>
                <button className="btn main react" onClick={onClick}>Đăng ký</button>
            </form>
        </section>
    )
}

export default RegisterForm
