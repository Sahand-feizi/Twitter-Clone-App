import React from 'react'
import Post from './Post'

function Posts({posts}) {
    return (
        <div className='w-full'>
            {
                posts.map(post => (
                    <Post {...post}/>
                ))
            }
        </div>
    )
}

export default Posts
