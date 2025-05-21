import React, { useState } from 'react'
import HeaderProfile from '../features/profile/headerProfile'
import { POSTS, User } from '../db/dummyData'
import ProfileAvatar from '../features/profile/ProfileAvatar'
import ProfileInformation from '../features/profile/ProfileInformation'
import Posts from '../features/post/Posts'
import PostSkeleton from '../features/post/skeleton/PostSkeleton'
import ProfileAvatarSkeleton from '../features/profile/skeleton/ProfileAvatarSkeleton'
import ProfileInformationSkeleton from '../features/profile/skeleton/ProfileInformationSkeleton'
import HeaderProfileSkeleton from '../features/profile/skeleton/HeaderProfileSkeleton'
import useGetAuthUser from '../features/auth/useGetAuthUser'

function Profile() {
    const [feedType, setFeedType] = useState('posts')
    const hoverFeedTypeStyle = 'after:content-[""] after:bottom-0 after:w-1/2 after:h-1.5 after:rounded-full after:bg-primary-900 after:absolute'
    const { authUser, isLoading } = useGetAuthUser()

    return (
        <div className='border-r border-r-secondary-400'>
            {
                isLoading ? (
                    <HeaderProfileSkeleton />
                ) : (
                    <HeaderProfile fullName={authUser?.fullName} posts={POSTS} />
                )
            }
            {
                isLoading ? (
                    <ProfileAvatarSkeleton />
                ) : (
                    <ProfileAvatar user={authUser} />
                )
            }
            {
                isLoading ? (
                    <ProfileInformationSkeleton />
                ) : (
                    <ProfileInformation user={authUser} />
                )
            }
            <div className='flex items-center border-b border-b-secondary-400 mt-5'>
                <button onClick={() => setFeedType('posts')} className={`flex-1 flex justify-center relative items-center text-center bg-transparent py-2 hover:bg-secondary-100 ${feedType == "posts" && hoverFeedTypeStyle}`}>Posts</button>
                <button onClick={() => setFeedType('likes')} className={`flex-1 flex justify-center relative items-center text-center bg-transparent py-2 hover:bg-secondary-100 ${feedType == "likes" && hoverFeedTypeStyle}`}>Likes</button>
            </div>
            {
                isLoading ? (
                    <div className='w-full'>
                        <PostSkeleton />
                        <PostSkeleton />
                    </div>
                ) : (
                    <Posts posts={POSTS} />
                )
            }
        </div>
    )
}

export default Profile
