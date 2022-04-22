import React, { useState } from 'react'
import Input from '../../../components/Input'
import {useDispatch, useSelector} from 'react-redux'
import validate from '../../../core/utils/validate'
import { actionFetchLogin } from '../../../stores/auth'
import Button from '../../../components/Button'
import {Navigate} from 'react-router-dom'
import {ACCOUNT_PATH} from '../../../core/constants/path'
import { useToggle } from '../../../core/hooks/useToggle'
import { message } from 'antd'

export default function ReturningCustomer() {
    const [error, setError] = useState({})
    const [form, setForm] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [loginError, setLoginError] = useState('')
    const dispatch = useDispatch()
    // const {isFetchLogin} = useSelector(store => store.auth)
    const {user} = useSelector(store => store.user)
    const isFetchLogin = useToggle()

    // console.log('isFetchLogin', isFetchLogin);
    const onClick = async (ev) => {
        ev.preventDefault();
        const errorObj = validate(form,{
            username: [{required: true, message: "Vui long dien thong tin tai khoan"}, {pattern: 'email', message: 'Vui long dien dung dinh dang email'}],
            password: [{required: true, message: "Vui long dien mat khau"}],
        })
        // console.log(errorObj);
        setError(errorObj);
        
        if(Object.keys(errorObj).length === 0){
            // alert('thanh cong!');
            isFetchLogin.setTrue()
            dispatch(actionFetchLogin({
                data: form,
                success(){
                    message.success('Chao mung ban quay tro lai')
                    // navigate()
                },
                error(error){
                    setLoginError(error)
                },
                end(){
                    isFetchLogin.setFalse()
                }
            }))

        }
    }
    if(user){
        
        return <Navigate to={ACCOUNT_PATH}/>
    }
    console.log('user: ',user);
    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Returning Customer</h6>
                    {/* Form */}
                    {
                        loginError && <p className="error-message" style={{color: 'red'}}>{loginError}</p>
                    }
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <Input 
                                    label="Email Address *"
                                    onChange={ev => form.username = ev.target.value}
                                    placeholder="Email Address *"
                                    error={error.username}
                                    id="loginEmail"
                                />
                            </div>
                            <div className="col-12">
                                 <Input 
                                    label="Password *"
                                    onChange={ev => form.password = ev.target.value}
                                    placeholder="Password *"
                                    error={error.password}
                                    id="loginPassword"
                                />
                            </div>
                            <div className="col-12 col-md">
                                {/* Remember */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="loginRemember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group">
                                    <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                        Password?</a>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                {/* <button className="btn btn-sm btn-dark" type="submit" onClick={onClick}>
                                    Sign In
                                </button> */}
                                <Button loading={isFetchLogin.value} className="btn btn-sm btn-dark" type="submit" onClick={onClick}>
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
