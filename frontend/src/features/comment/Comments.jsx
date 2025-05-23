import React from 'react'

function Comments({ comments }) {
    return (
        <div className='w-full h-[8rem] border-b border-secondary-400 overflow-auto'>
            {
                comments.map(comment => {
                    const {text, user} = comment;
                    console.log(user);
                    
                    return (
                        <div className='w-full flex gap-x-2 p-4'>
                            <img
                                src={user.profileImg || '/avatar-placeholder.png'}
                                alt={user.username}
                                className='h-[40px] w-[40px] rounded-full object-cover'
                            />
                            <div className='w-full space-y-2'>
                                <div className='flex items-center gap-x-2'>
                                    <h4 className='text-white text-lg'>{user.fullName}</h4>
                                    <p className='text-secondary-400 text-sm'>@{user.username}</p>
                                </div>
                                <p className='text-md text-white'>{text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments
