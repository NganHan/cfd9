import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { useToggle } from '../../../core/hooks/useToggle'
import validate from '../../../core/utils/validate'
import { actionFetchChangePassword, actionFetchUpdateInfo } from '../../../stores/user'
import { DatePicker, message, Radio } from 'antd'

export default function PersonalInfo() {
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [form, setForm] = useState({})
    const isFetchUpdate = useToggle()
    const {user} = useSelector(store => store.user)
    useEffect(() => {
        setForm(user)
    }, [user])
    console.log('form', form);
    const onClick = async (ev) => {
        ev.preventDefault();
        isFetchUpdate.setTrue()
        if(form.oldPassword){
            const errorObj = validate(form,{
                oldPassword: [{required: true, message: "Vui long dien mat khau hien tai"},{pattern: 'password', message: 'Vui long dien it nhat 6 ky tu, day du chu thuong, hoa, so va ky tu dac biet'}],
                newPassword: [{required: true, message: "Vui long dien mat khau moi"},{pattern: 'password', message: 'Vui long dien it nhat 6 ky tu, day du chu thuong, hoa, so va ky tu dac biet'}],
            })
            setError(errorObj);
            if(Object.keys(errorObj).length === 0){
                console.log("hiiiiii");
                dispatch(actionFetchChangePassword({
                    data:{
                        oldPassword: form.oldPassword,
                        newPassword: form.newPassword
                    },
                    error(error){
                        message.error(error)
                    },
                    success(){
                        message.success('Thay doi mat khau thanh cong')
                    }
                }))
            }
        }
        dispatch(actionFetchUpdateInfo({
            data: {
                ...form, newPassword: undefined, oldPassword: undefined
            },
            error(error){
                message.error(error)
            },
            success(){
                message.success('cap nhat tai khoan thanh cong')
            },
            end(){
                isFetchUpdate.setFalse()
            }
        }))
        
    }
    const onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setForm({
            ...form,
            [name] : value
        })
    }
    return (
        <>
            {/* Form */}
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Input.Value 
                            label="Name1 *"
                            onChange={onChange}
                            placeholder="Full name"
                            error={error.name}
                            id="registerFirstName"
                            name = "name"
                            value = {form.name}
                        />
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <Input.Value  
                            label="Email Address *"
                            onChange={onChange}
                            placeholder="Email Address *"
                            error={error.username}
                            id="registerEmail"
                            name = "username"
                            value = {form.username}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <Input.Value  
                            label="Current Password *"
                            onChange={onChange}
                            placeholder="Password *"
                            error={error.oldPassword}
                            id="registerPassword"
                            name = "oldPassword"
                            value = {form.oldPassword}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        {/* New Password */}
                        <Input.Value  
                            label="New Password *"
                            onChange={onChange}
                            placeholder="New Password *"
                            error={error.newPassword}
                            id="registerPassword"
                            name = "newPassword"
                            value = {form.newPassword}
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Birthday */}
                        <DatePicker />
                        {/* <div className="form-group">
                      
                            <label>Date of Birth</label>
                         
                            <div className="form-row">
                                <div className="col-auto">
                                    
                                    <label className="sr-only" htmlFor="accountDate">
                                        Date
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountDate">
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected>12</option>
                                    </select>
                                </div>
                                <div className="col">
                                
                                    <label className="sr-only" htmlFor="accountMonth">
                                        Month
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountMonth">
                                        <option>January</option>
                                        <option selected>February</option>
                                        <option>March</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                
                                    <label className="sr-only" htmlFor="accountYear">
                                        Year
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountYear">
                                        <option>1990</option>
                                        <option selected>1991</option>
                                        <option>1992</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-12 col-lg-6">
                  
                        <div className="form-group mb-8">
                            <label>Gender</label>
                            {/* <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-outline-border active">
                                    <input type="radio" name="gender" defaultChecked /> Male
                                </label>
                                <label className="btn btn-sm btn-outline-border">
                                    <input type="radio" name="gender" /> Female
                                </label>
                            </div> */}
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="col-12">
                   
                        <Button loading={isFetchUpdate.value} className="btn btn-dark" type="submit" onClick={onClick}>
                            Save Changes
                        </Button>
                       
                    </div>
                </div>
            </form>
        </>
    )
}
