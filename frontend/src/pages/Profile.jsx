import React, { useEffect, useState } from 'react'
import HeaderProfile from '../features/profile/HeaderProfile'
import ProfileAvatar from '../features/profile/ProfileAvatar'
import ProfileInformation from '../features/profile/ProfileInformation'
import Posts from '../features/post/Posts'
import PostSkeleton from '../features/post/skeleton/PostSkeleton'
import ProfileAvatarSkeleton from '../features/profile/skeleton/ProfileAvatarSkeleton'
import ProfileInformationSkeleton from '../features/profile/skeleton/ProfileInformationSkeleton'
import HeaderProfileSkeleton from '../features/profile/skeleton/HeaderProfileSkeleton'
import useGetPosts from '../features/post/useGetPosts'
import useGetUserProfile from '../features/profile/useGetUserProfile'

function Profile() {
    const [feedType, setFeedType] = useState('posts')
    const hoverFeedTypeStyle = 'after:content-[""] after:bottom-0 after:w-1/2 after:h-1.5 after:rounded-full after:bg-primary-900 after:absolute'
    const { user, isLoading } = useGetUserProfile()
    const { posts, isLoading: isLoadingPost, postsRefetch, isRefetching } = useGetPosts(feedType, user?.username, user?._id)

    useEffect(() => {
        postsRefetch()
    }, [feedType])

    return (
        <div className='border-r border-r-secondary-400'>
            {
                isLoading || isLoadingPost || isRefetching ? (
                    <HeaderProfileSkeleton />
                ) : (
                    <HeaderProfile fullName={user?.fullName} posts={posts} />
                )
            }
            {
                isLoading ? (
                    <ProfileAvatarSkeleton />
                ) : (
                    <ProfileAvatar user={user} />
                )
            }
            {
                isLoading ? (
                    <ProfileInformationSkeleton />
                ) : (
                    <ProfileInformation user={user} />
                )
            }
            <div className='flex items-center border-b border-b-secondary-400 mt-5'>
                <button onClick={() => setFeedType('posts')} className={`flex-1 flex justify-center relative items-center text-center bg-transparent py-2 hover:bg-secondary-100 text-secondary ${feedType == "posts" && hoverFeedTypeStyle}`}>Posts</button>
                <button onClick={() => setFeedType('likes')} className={`flex-1 flex justify-center relative items-center text-center bg-transparent py-2 hover:bg-secondary-100 text-secondary ${feedType == "likes" && hoverFeedTypeStyle}`}>Likes</button>
            </div>
            {
                isLoading || isLoadingPost || isRefetching ? (
                    <div className='w-full'>
                        <PostSkeleton />
                        <PostSkeleton />
                    </div>
                ) : (
                    <Posts posts={posts} />
                )
            }
        </div>
    )
}

export default Profile
