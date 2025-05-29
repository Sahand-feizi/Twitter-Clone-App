import React from 'react'
import Post from './Post'

function Posts({ posts, isLoading }) {

    return (
        <div className='w-full'>
            {
                posts?.length > 0 ? (
                    posts.map((post) => (
                        <Post key={post._id} post={post} />
                    ))
                ) : (
                    <h1 className='text-secondary-900 text-lg font-bold my-4 text-center'>No Posts 🤔</h1>
                )
            }
        </div>
    )
}

export default Posts
