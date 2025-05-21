import React, { useState } from 'react'
import Sidbar from '../ui/Sidbar'
import CreatePost from '../features/post/CreatePost'
import Posts from '../features/post/Posts'
import { POSTS } from '../db/dummyData'
import PostSkeleton from '../features/post/skeleton/PostSkeleton'

function Home() {
    const [feedType, setFeedType] = useState('forYou')
    const hoverFeedTypeStyle = 'after:content-[""] after:bottom-0 after:w-1/2 after:h-1.5 after:rounded-full after:bg-primary-900 after:absolute'
    const isLoading = false;

    return (
        <div className='border-r border-r-secondary-400 w-full'>
            <div className='flex items-center border-b border-b-secondary-400'>
                <button onClick={() => setFeedType('forYou')} className={`flex-1 flex justify-center relative items-center text-center bg-transparent py-2 hover:bg-secondary-100 ${feedType == "forYou" && hoverFeedTypeStyle}`}>forYou</button>
                <button onClick={() => setFeedType('following')} className={`flex-1 flex justify-center relative items-center text-center bg-transparent py-2 hover:bg-secondary-100 ${feedType == "following" && hoverFeedTypeStyle}`}>following</button>
            </div>
            <CreatePost />
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

export default Home
