import React from 'react'
import Post from './Post'

function Posts({ posts, isLoading }) {

    return (
        <div className='w-full'>
            {
                posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))
            }
        </div>
    )
}

export default Posts
