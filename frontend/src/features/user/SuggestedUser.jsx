import React from 'react'
import { Link } from 'react-router-dom'
import useFollowUser from '../../hooks/useFollowUser';
import Loading from '../../ui/Loading'
import useGetAuthUser from '../auth/useGetAuthUser';

function SuggestedUser({ user }) {
    const { followUser, isFollowing } = useFollowUser()
    const { authUser } = useGetAuthUser()
    console.log(authUser, user);
    

    const isMyFollowing = authUser.following.includes(user._id);

    const followUserHandler = (e) => {
        e.preventDefault()
        followUser(user._id)
    }

    return (
        <Link to={`/profile/${user.username}`} className='text-secondary-900 w-full flex items-center duration-100 transition-all gap-x-2 px-3'>
            <img
                className='h-8 w-8 rounded-full object-cover hidden md:flex'
                src={user.profileImg || '/avatar-placeholder.png'}
                alt="profileImage"
            />
            <div className='hidden md:flex items-center justify-between w-full'>
                <div className='hidden md:block text-left'>
                    <h2 className='text-[.9rem] text-secondary-900 font-bold'>
                        {
                            user.fullName.length > 9 ? user.fullName.slice(0, 8) + '...' : user.fullName
                        }
                    </h2>
                    <p className='text-sm text-secondary-400'>@{user.username}</p>
                </div>
                <button onClick={followUserHandler} className='btn btn--secondary_fill px-2 h-[2.2rem] text-xs'>
                    {
                        isFollowing ? (
                            <Loading size='xs' />
                        ) : isMyFollowing ? 'UnFollow' : 'Follow'
                    }
                </button>
            </div>

        </Link>
    )
}

export default SuggestedUser
