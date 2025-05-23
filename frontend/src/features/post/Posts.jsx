import React from 'react'
import Post from './Post'

function Posts({ posts, isLoading }) {

    return (
        <div className='w-full'>
            {
                posts.map((post) => (
                    <Post post={post} />
                ))
            }
        </div>
    )
}

export default Posts
