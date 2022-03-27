import React, { useContext, useState } from 'react'
import Input from '../components/Input'
import './login.scss'
import { AuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function Login() {
    const {handleLogin, user} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')


    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const onClick = async (ev) => {
        ev.preventDefault();
        const errorObj = {}
        if(!form.username){
            errorObj.username = 'Vui long nhap UserName'
        }else if(! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.username)){
            errorObj.username = 'Vui long nhap dung dinh dang Email'
        }

        if(!form.password){
            errorObj.password = 'Vui long nhap Password'
        }
        
        // console.log(errorObj);
        setError(errorObj);
        if(Object.keys(errorObj).length === 0){
            // alert('thanh cong!');
            const message = await handleLogin(form)
            // console.log(message);
            if(message){
                setErrorMessage(message)
            }
            // handleLogin(form)
        }
    }
    console.log(user);
    if(user) return <Navigate to="/"/>
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        {
                            errorMessage && <p className="error-message">{errorMessage}</p>
                        }
                        <div className="form">
                            <Input 
                                label="Họ và tên"
                                onChange={ev => form.username = ev.target.value}
                                placeholder="Họ và tên bạn"
                                error={error.username}
                            />
                            <Input 
                                label="Password"
                                onChange={ev => form.password = ev.target.value}
                                placeholder="Password"
                                error={error.password}
                            />
                            <div className="btn main rect" onClick={onClick}>Login</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
