import React from 'react'

export default function Input({label, placeholder, onChange, error, id}) {
  return (
    <>
        <div className="form-group">
            <label className="sr-only" htmlFor={id}>
                {label}
            </label>
            <input className="form-control form-control-sm" id={id} type="text" placeholder={placeholder} onChange={onChange} required />
            {error && <p className='error-text' style={{color: 'red'}}>{error}</p>}
        </div>
    </>
  )
}
