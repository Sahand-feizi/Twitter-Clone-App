import React from 'react'

function ProfileInformationSkeleton() {
    return (
        <div className='w-full pt-5 px-4 space-y-4'>
            <div className='h-[.9rem] w-16 mx-auto skeleton bg-secondary-100'></div>
            <div className='h-[.8rem] w-12 mx-auto skeleton bg-secondary-100'></div>
            <div className='h-[.8rem] w-3/4 mx-auto skeleton bg-secondary-100'></div>
            <div className='flex items-center gap-x-4 flex-wrap gap-y-2'>
                
                    <div className='w-2/4 h-[.7rem] bg-secondary-100 skeleton'></div>
                
                    <div className='w-24 h-[.7rem] bg-secondary-100 skeleton'></div>
                
            </div>
            <div className='flex items-center gap-x-4 flex-wrap'>
                <div className='h-[.7rem] w-12 bg-secondary-100 skeleton'></div>
                <div className='h-[.7rem] w-12 bg-secondary-100 skeleton'></div>
            </div>
        </div>
    )
}

export default ProfileInformationSkeleton
