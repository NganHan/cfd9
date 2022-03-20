import React from 'react'

export default function Input({label, placeholder, onChange, error}) {
  return (
    <>
      <label>
          <p>{label}<span>*</span></p>
          <input type="text" placeholder={placeholder} onChange={onChange}/>
          {error && <p className='error-text'>{error}</p>}
      </label>
    </>
  )
}

Input.Number = ({label, placeholder, onChange, error}) => {
  return(
    <>
      <label>
          <p>{label}<span>*</span></p>
          <input type="number" placeholder={placeholder} onChange={onChange}/>
          {error && <p className='error-text'>{error}</p>}
      </label>
    </>
  )
}