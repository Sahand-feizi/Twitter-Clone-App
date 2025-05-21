import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom';

function Notification({ from, type }) {
    return (
        <div className='w-full flex gap-x-4 border-b border-b-secondary-400 p-4'>
            {type == 'follow' && <FaUser className='text-xl text-primary-500' />}
            {type == 'like' && <FaHeart className='text-xl text-error' />}
            <div className='flex flex-col items-center justify-center'>
                <img
                    className='h-12 w-12 rounded-full object-cover'
                    src={from.profileImg}
                    alt="profileImage"
                />
                <div className="flex gap-x-2 text-secondary-900 items-center">
                    <Link to={`/profile/${from.username}`} className='text-lg font-bold'>@{from.username}</Link>
                    <p className='text-sm font-thin'>
                        {
                            type == 'like' ? 'like your post' : 'followed you'
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Notification
