import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import Modal from '../../ui/Modal';
import Comments from '../comment/Comments';
import CommentForm from '../comment/CommentForm';
import useGetAuthUser from '../auth/useGetAuthUser'
import useRemovePost from './useRemovePost';
import useLikePost from './useLikePost';

function Post({ post }) {
    const [isOpen, setIsOpen] = useState(false)
    const { text, img, user, comments, likes } = post;
    const { authUser } = useGetAuthUser()
    const isMyPost = authUser?._id === user?._id;
    const { removePost, isDeleting } = useRemovePost()
    const { likePost, isUpdating } = useLikePost(post._id)

    const removePostHandler = () => {
        removePost(post?._id)
    }

    const likePostHandler = () => {
        likePost(post._id)
    }

    return (
        <div className='w-full flex gap-x-2 p-4 border-b border-b-secondary-400'>
            <img
                src={user?.profileImg || '/avatar-placeholder.png'}
                alt={user?.username}
                className='h-[40px] w-[40px] rounded-full object-cover'
            />
            <div className='w-full space-y-2'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-x-2'>
                        <h4 className='text-white text-lg'>{user?.fullName}</h4>
                        <p className='text-secondary-400 text-sm'>@{user?.username}</p>
                    </div>
                    {
                        isMyPost ? (
                            <button onClick={removePostHandler} className='text-error text-lg'>
                                <FaTrash />
                            </button>
                        ) : null
                    }
                </div>
                <p className='text-md text-white'>{text}</p>
                {
                    img &&
                    <div className='w-full rounded-xl border border-secondary-400 flex justify-center overflow-hidden'>
                        <img src={img} alt="image" className='h-full object-contain' />
                    </div>
                }
                <div className="flex items-center justify-between mt-2">
                    <>
                        <button onClick={() => setIsOpen(true)} className='text-secondary-500 text-lg hover:text-secondary-600 flex gap-x-2 items-center'>
                            <FaRegComment />
                            <p className='text-sm'>{comments?.length}</p>

                        </button>
                        <Modal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        >
                            <p className="text-xl text-white font-bold text-center">Comments</p>
                            {comments.length > 0 && <Comments comments={comments} />}
                            <CommentForm />
                        </Modal>
                    </>
                    <button className='text-secondary-500 text-2xl hover:text-secondary-600 flex gap-x-2 items-center'>
                        <BiRepost />
                        <p className='text-sm'>0</p>
                    </button>
                    <button onClick={likePostHandler} className='text-error text-lg flex gap-x-2 items-center'>
                        <FaRegHeart />
                        <p className='text-sm'>{likes?.length}</p>
                    </button>
                    <button className='text-secondary-500 text-lg hover:text-secondary-600'>
                        <FaRegBookmark />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post
