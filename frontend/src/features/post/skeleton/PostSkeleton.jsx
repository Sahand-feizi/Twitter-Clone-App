import React from 'react'

function PostSkeleton() {
    return (
        <div className='w-full flex gap-x-2 p-4 border-b border-b-secondary-400'>
            <div className='h-[40px] w-[40px] rounded-full bg-secondary-100 skeleton'></div>
            <div className='w-full space-y-2'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-x-2'>
                        <div className='bg-secondary-100 w-12 h-[.9rem] skeleton'></div>
                        <div className='bg-secondary-100 w-10 h-[.8rem] skeleton'></div>
                    </div>
                    
                </div>
                <div className='bg-secondary-100 h-[.8rem] w-5/6 skeleton'></div>
                <div className='w-full flex justify-center overflow-hidden'>
                    <div className='h-[8rem] w-full skeleton bg-secondary-100'></div>
                </div>
            </div>
        </div>
    )
}

export default PostSkeleton
