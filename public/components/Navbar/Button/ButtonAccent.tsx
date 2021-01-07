import React from 'react'

const ButtonPrimary = ({ children, className, ...otherProps }) => {
    return (
        <div className='group relative inline-block align-bottom'>
            <button className={`z-10 relative bg-accent border border-white p-2 rounded-md text-white ${className}`} {...otherProps}>{children}</button>
            <div className='min-w-min group-hover:scale-100 absolute inset-0 z-0 inline w-full h-full duration-200 origin-bottom transform scale-y-0 bg-green-400 rounded-md'></div>
        </div>
    )
}

export default ButtonPrimary
