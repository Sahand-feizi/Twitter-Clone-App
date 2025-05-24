import React from 'react'

function TextField({ type = 'text', icon, name, placeholder, register, validationSchema, errors, className=''}) {
    return (
        <div className={`space-y-2 w-full ${className}`}>
            <div className={`textFieldContainer w-full ${className}`}>
                {icon}
                <input
                    className='text-md font-thin bg-transparent outline-none w-full'
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    {...register(name, validationSchema)}
                />
            </div>
            {errors && errors[name] && <p className='text-sm text-error text-left'>{errors[name].message}</p>}
        </div>
    )
}

export default TextField
