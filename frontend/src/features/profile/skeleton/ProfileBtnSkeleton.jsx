import React from 'react'

function ProfileBtnSkeleton() {
    return (
        <div className='text-secondary-900 hover:text-error w-full flex items-center justify-center text-xl duration-100 transition-all md:justify-start md:gap-x-2 md:px-3'>
            <div className='h-8 w-8 rounded-full hidden md:flex bg-secondary-100 skeleton'></div>
            <div className='hidden md:block text-left md:space-y-2'>
                <div className='h-[.9rem] bg-secondary-100 w-16 skeleton'></div>
                <div className='h-[.9rem] bg-secondary-100 w-12 skeleton'></div>
            </div>
        </div>
    )
}

export default ProfileBtnSkeleton
