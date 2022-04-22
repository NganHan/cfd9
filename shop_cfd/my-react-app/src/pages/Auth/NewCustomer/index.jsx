import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/Button'
import ErrorMessage from '../../../components/ErrorMessage'
import Input from '../../../components/Input'
import { ACCOUNT_PATH } from '../../../core'
import { useToggle } from '../../../core/hooks/useToggle'
import validate from '../../../core/utils/validate'
import { actionFetchRegister } from '../../../stores/auth'
import {Navigate} from 'react-router-dom'
import { message } from 'antd'

export default function NewCustomer() {
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [form, setForm] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [registerError, setRegisterError] = useState('')
    const {user} = useSelector(store => store.user)
    const isFetchRegister = useToggle()
    const onClick = async (ev) => {
        ev.preventDefault();
        const errorObj = validate(form,{
            name: [{required: true, message: "Vui long dien thong tin name"}],
            username: [{required: true, message: "Vui long dien thong tin email"}, {pattern: 'email', message: 'Vui long dien dung dinh dang email'}],
            password: [{required: true, message: "Vui long dien mat khau"},{pattern: 'password', message: 'Vui long dien it nhat 6 ky tu, day du chu thuong, hoa, so va ky tu dac biet'}],
            confirmPassword: [{required: true, message: "Vui long dien lai mat khau"}],
        })
        setError(errorObj);
        if(Object.keys(errorObj).length === 0){
            isFetchRegister.setTrue()
            dispatch(actionFetchRegister({
                
                data: form,
                error(message){
                    setRegisterError(message)
                },
                success(){
                    message.success('Chuc mung ban da dang ky thanh cong!')
                },
                end(){
                    isFetchRegister.setFalse()
                }
            }))
        }
    }
    if(user){
        return <Navigate to={ACCOUNT_PATH}/>
    }
    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">New Customer</h6>
                    {/* Form */}
                    {
                        // registerError && <p className="error-message">{registerError}</p>
                        registerError && <ErrorMessage>{registerError}</ErrorMessage>
                    }
                    <form>
                        <div className="row">
                            <div className="col-12">
                                {/* Name */}
                                <Input 
                                    label="Name *"
                                    onChange={ev => form.name = ev.target.value}
                                    placeholder="Name *"
                                    error={error.name}
                                    id="registerFirstName"
                                />
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <Input 
                                    label="Email Address *"
                                    onChange={ev => form.username = ev.target.value}
                                    placeholder="Email Address *"
                                    error={error.username}
                                    id="registerEmail"
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <Input 
                                    label="Password *"
                                    onChange={ev => form.password = ev.target.value}
                                    placeholder="Password *"
                                    error={error.password}
                                    id="registerPassword"
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <Input 
                                    label="Confirm Password *"
                                    onChange={ev => form.confirmPassword = ev.target.value}
                                    placeholder="Confirm Password *"
                                    error={error.confirmPassword}
                                    id="registerPasswordConfirm"
                                />
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group font-size-sm text-muted">
                                    By registering your details, you agree with our Terms &amp; Conditions,
                                    and Privacy and Cookie Policy.
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Newsletter */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="registerNewsletter">
                                            Sign me up for the Newsletter!
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <Button loading={isFetchRegister.value} className="btn btn-sm btn-dark" type="submit" onClick={onClick}>
                                    Register
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
