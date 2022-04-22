import React from 'react'

export default function Input({label, placeholder, onChange, error, id}) {
  return (
    <>
        <div className="form-group">
            <label className="" htmlFor={id}>
                {label}
            </label>
            <input className="form-control form-control-sm" id={id} type="text" placeholder={placeholder} onChange={onChange}/>
            {error && <p className='error-text' style={{color: 'red'}}>{error}</p>}
        </div>
    </>
  )
}

Input.Value = ({label, placeholder, onChange, error, id, name='', value=''}) => {
  return (
    <>
        <div className="form-group">
            <label className="" htmlFor={id}>
                {label}
            </label>
            <input className="form-control form-control-sm" id={id} type="text" placeholder={placeholder} onChange={onChange} name={name} value={value}/>
            {error && <p className='error-text' style={{color: 'red'}}>{error}</p>}
        </div>
    </>
  )
}
