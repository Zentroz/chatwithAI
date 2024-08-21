import React from 'react'

const InputField = ({ label, type, regName, register }) => {
  return (
    <>
      <div className='flex flex-col'>
        <label htmlFor={label?.replace(" ", "").toLowerCase()}>{label || "Laber Here"}</label>
        <input className='p-3 border-2 h-12 rounded-lg w-[25vw] min-w-28' type={type || "text"} id={label?.replace(" ", "").toLowerCase()} {...register(regName)} />
      </div>
    </>
  )
}

export default InputField
