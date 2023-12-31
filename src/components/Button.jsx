import React from 'react'

const Button = ({label, iconURL,backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`${backgroundColor? backgroundColor
    :"bg-coral-red"} ${borderColor? borderColor :"bg-coral-red"}
    ${textColor? textColor : "text-white"}
    rounded-full border
    flex justify-center items-center
     px-7 py-4 gap-2 text-lg leading-none font-montserrat`}>
        {label}
        {iconURL&&<img src={iconURL}
        alt='arrow-right'
        className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button
