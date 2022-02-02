import React from 'react'

const ButtonPrimary = ({ children, className, ...otherProps }) => {
    return (
        <div className='group relative inline-block'>
            <button className={`z-20 relative bg-transparent  border-transparent duration-200 border hover:border-white  p-2 rounded-md text-white ${className}`} {...otherProps}>{children}</button>
            <div className='min-w-min group-hover:scale-y-0 bg-primary absolute inset-0 z-0 inline h-full duration-200 origin-bottom transform scale-y-100 rounded-md'></div>

        </div>
    )
}

export default ButtonPrimary
