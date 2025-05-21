import React from 'react'
import { Link } from 'react-router-dom'

function SuggestedUser({ user }) {
    const isMyFollowing = false;

    return (
        <Link to={`/profile/${user.username}`} className='text-secondary-900 w-full flex items-center duration-100 transition-all gap-x-2 px-3'>
            <img
                className='h-8 w-8 rounded-full object-cover hidden md:flex'
                src={user.profileImg}
                alt="profileImage"
            />
            <div className='hidden md:flex items-center justify-between w-full'>
                <div className='hidden md:block text-left'>
                    <h2 className='text-[.9rem] text-secondary-900 font-bold'>{user.fullName}</h2>
                    <p className='text-sm text-secondary-400'>@{user.username}</p>
                </div>
                <button className='btn btn--secondary_fill px-2 h-[2.2rem] text-sm'>
                    {
                        isMyFollowing ? 'Follow' : 'UnFollow'
                    }
                </button>
            </div>

        </Link>
    )
}

export default SuggestedUser
