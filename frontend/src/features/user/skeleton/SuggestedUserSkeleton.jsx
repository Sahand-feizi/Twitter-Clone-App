import React from 'react'

function SuggestedUserSkeleton() {
    return (
        <div className='w-full flex items-center gap-x-2'>
            <div className='h-8 w-8 rounded-full hidden md:flex bg-secondary-50 skeleton'></div>
            <div className='hidden md:flex items-center justify-between w-full'>
                <div className='text-left space-y-2'>
                    <div className='h-[.8rem] w-16 bg-secondary-50 skeleton'></div>
                    <div className='h-[.6rem] w-12 bg-secondary-50 skeleton'></div>
                </div>
                <div className='btn btn--secondary_fill px-2 h-[2rem] bg-secondary-50 w-[5rem] hover:bg-secondary-50 skeleton'></div>
            </div>
        </div>
    )
}

export default SuggestedUserSkeleton
