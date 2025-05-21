import React from 'react'

function ProfileAvatarSkeleton() {
    return (
        <div className='w-full'>
            <div className='w-full relative group'>
                <div className="w-full object-cover h-[12rem] bg-secondary-100 skeleton" ></div>
                <div className="absolute left-4 -bottom-10 h-28 w-28 rounded-full">
                    <div className='h-full w-full rounded-full object-cover bg-secondary-200 skeleton'></div>
                </div>
            </div>
            <div className='flex items-center gap-x-2 justify-end py-3 px-4'>
                <div className='btn btn--secondary_fill px-2 h-[2rem] bg-secondary-100 w-[5rem] hover:bg-secondary-100 skeleton'></div>
                <div className='btn btn--secondary_fill px-2 h-[2rem] bg-secondary-100 w-[5rem] hover:bg-secondary-100 skeleton'></div>
            </div>
        </div>
    )
}

export default ProfileAvatarSkeleton
