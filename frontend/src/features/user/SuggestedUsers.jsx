import React from 'react'
import { USERS_FOR_RIGHT_PANEL } from '../../db/dummyData'
import SuggestedUser from './SuggestedUser'
import SuggestedUserSkeleton from './skeleton/SuggestedUserSkeleton';

function SuggestedUsers() {
    const isLoading = false;

    if (isLoading)
        return (
            <div className='rounded-xl bg-secondary-0 grid grid-rows-[1rem_1fr] sticky top-0 p-2 right-0 max-h-[16.5rem] space-y-4 ml-4'>
                <h3 className='text-[1rem] font-bold text-secondary-900 text-center'>Who to follow</h3>
                <div className='w-full h-full flex flex-col justify-between pb-5'>
                    <SuggestedUserSkeleton />
                    <SuggestedUserSkeleton />
                    <SuggestedUserSkeleton />
                    <SuggestedUserSkeleton />
                </div>
            </div>
        )

    return (
        <div className='rounded-xl bg-secondary-0 hidden lg:block sticky top-0 p-2 right-0 max-h-[16.5rem] space-y-4 ml-4'>
            <h3 className='text-[1rem] font-bold text-secondary-900 text-center'>Who to follow</h3>
            {
                USERS_FOR_RIGHT_PANEL.map(user => (
                    <SuggestedUser user={user} />
                ))
            }
        </div>
    )
}

export default SuggestedUsers
