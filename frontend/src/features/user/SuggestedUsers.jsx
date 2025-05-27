import React from 'react'
import SuggestedUser from './SuggestedUser'
import SuggestedUserSkeleton from './skeleton/SuggestedUserSkeleton';
import useGetSuggestedUsers from './useGetSuggestedUsers'

function SuggestedUsers() {
    const { suggestedUsers, isLoading } = useGetSuggestedUsers()

    if (isLoading)
        return (
            <div className='rounded-xl bg-secondary-0 grid grid-rows-[1rem_1fr] sticky top-0 p-2 right-0 max-h-[16.5rem] space-y-4 ml-4'>
                <h3 className=''>Who to follow</h3>
                <div className='w-full h-full flex flex-col justify-between pb-5'>
                    <SuggestedUserSkeleton />
                    <SuggestedUserSkeleton />
                    <SuggestedUserSkeleton />
                    <SuggestedUserSkeleton />
                </div>
            </div>
        )

    return (
        <div className='rounded-xl bg-secondary-0 hidden lg:block sticky top-0 p-2 right-0 max-h-[17.5rem] space-y-4 ml-4'>
            <h3 className='text-[1rem] font-bold text-secondary-900 text-center'>Who to follow</h3>
            {
                (suggestedUsers?.length > 0 && !isLoading) ? (
                    suggestedUsers.map(user => (
                        <SuggestedUser key={user._id} user={user} />
                    ))
                ) : (
                    <h1 className='text-secondary-900 text-lg font-bold my-4 text-center'>No Users To Follow 🤔</h1>
                )
            }
        </div>
    )
}

export default SuggestedUsers
