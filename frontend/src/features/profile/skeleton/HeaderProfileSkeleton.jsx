import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

function HeaderProfileSkeleton() {
    return (
        <div className='w-full flex items-center gap-x-8 pb-2 px-4'>
            <button className='text-secondary-800 text-lg'>
                <FaArrowLeft />
            </button>
            <div className='space-y-2'>
                <div className='h-[.9rem] w-16 bg-secondary-100 skeleton'></div>
                <div className='h-[.8rem] w-12 bg-secondary-100 skeleton'></div>
            </div>
        </div>
    )
}

export default HeaderProfileSkeleton
