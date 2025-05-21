import React from 'react'
import { FaLink } from "react-icons/fa6";
import { BsFillCalendar2DateFill } from "react-icons/bs";

function ProfileInformation({ user }) {
    return (
        <div className='w-full pt-5 px-4 space-y-2'>
            <h2 className='text-secondary-900 text-lg font-bold text-center'>{user?.fullName}</h2>
            <p className='text-sm text-secondary-400 text-center'>{user.length}@{user?.username}</p>
            <p className='text-sm text-secondary-900 text-center'>{user.bio}</p>
            <div className='flex items-center gap-x-4 flex-wrap gap-y-2'>
                <div className='flex items-center gap-x-2 text-sm text-secondary-400'>
                    <FaLink />
                    <a target='blank' className='text-primary-700' href={user.link}>{user.link}</a>
                </div>
                <div className='flex items-center gap-x-2 text-sm text-secondary-400'>
                    <BsFillCalendar2DateFill />
                    <p>joined April 2025</p>
                </div>
            </div>
            <div className='flex items-center gap-x-4 flex-wrap'>
                <div className='flex items-center gap-x-2 text-sm'>
                    <p className='text-secondary-900'>{user.following.length}</p>
                    <p className='text-secondary-400'>Following</p>
                </div>
                <div className='flex items-center gap-x-2 text-sm'>
                    <p className='text-secondary-900'>{user.followers.length}</p>
                    <p className='text-secondary-400'>Followers</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInformation
