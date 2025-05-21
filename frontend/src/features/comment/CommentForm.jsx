import React from 'react'
import { useForm } from 'react-hook-form'

function CommentForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

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
            <button className='btn btn--primary_fill'>Send</button>
        </form>
    )
}

export default CommentForm
