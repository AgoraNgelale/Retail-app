import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='bg-coral-red rounded-full
     text-white flex justify-center items-center
     px-7 py-4 gap-2 text-lg leading-none font-montserrat'>
        {label}
        <img src={iconURL}
        alt='arrow-right'
        className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button
