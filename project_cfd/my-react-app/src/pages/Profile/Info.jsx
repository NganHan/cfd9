import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

export default function Info() {
    const {user} = useContext(AuthContext)
    return (
        <>
            <div className="tab1">
                <label>
                    <p>Họ và tên<span>*</span></p>
                    <input type="text" placeholder={user?.name}/>
                </label>
                <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" placeholder={user?.phone} />
                </label>
                <label>
                    <p>Email<span>*</span></p>
                    <input defaultValue={user?.username} disabled type="text" />
                </label>
                <label>
                    <p>Facebook<span>*</span></p>
                    <input type="text" placeholder="Facebook url" />
                </label>
                <label>
                    <p>Skype<span>*</span></p>
                    <input type="text" placeholder={user?.skype} />
                </label>
                <div className="btn main rect">LƯU LẠI</div>
            </div>
        </>
    )
}
