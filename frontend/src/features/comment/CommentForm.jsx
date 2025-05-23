import React from 'react'
import { useForm } from 'react-hook-form'
import useCreateComment from './useCreateComment'
import Loading from '../../ui/Loading'

function CommentForm({ postId }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { createComment, isCreating } = useCreateComment()

    const createCommentHandler = (data) => {
        createComment({ postId, data })
    }

    return (
        <form className='flex items-center gap-x-2 py-2'>
            <div className='w-full'>
                <textarea
                    {...register('text', {
                        required: 'this is required'
                    })}
                    placeholder='Add a comment'
                    className='w-full h-[6rem] text-secondary-900 bg-transparent text-lg outline-none'
                />
                {errors && errors['text'] && <p className='text-sm font-thin text-erorr'>{errors['text'].message}</p>}
            </div>
            <button onClick={handleSubmit(createCommentHandler)} className='btn btn--primary_fill'>
                {
                    isCreating ? (
                        <Loading size='xs' />
                    ) : 'Send'
                }
            </button>
        </form>
    )
}

export default CommentForm
