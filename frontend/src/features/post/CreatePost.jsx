import React, { useRef, useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { GoX } from "react-icons/go";
import useReadFileInput from '../../hooks/useReadFileInput';

function CreatePost() {
    const [text, setText] = useState('')
    const [img, setImg] = useState(null)
    const { inputRef, onImageChange } = useReadFileInput(setImg)

    return (
        <div className='w-full flex gap-x-2 p-4 border-b border-b-secondary-400'>
            <img
                src="/avatars/boy1.png"
                alt="profileImg"
                className='h-[40px] w-[40px] rounded-full object-cover'
            />
            <div className='w-full space-y-2'>
                <div className='border-b border-b-secondary-400 w-full'>
                    <textarea
                        name="text"
                        id="text"
                        placeholder='What is happening?'
                        className='w-full h-[6rem] text-secondary-900 bg-transparent text-lg outline-none'
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    {
                        img &&
                        <div className='relative'>
                            <button onClick={() => setImg(null)} className='w-6 h-6 rounded-full flex items-center justify-center absolute right-0 top-0 text-white bg-secondary-100'>
                                <GoX />
                            </button>
                            <img src={img} alt="image" className='w-full max-h-[12rem] object-contain' />
                        </div>
                    }
                </div>
                <div className='border-t border-t-secondary-400 flex items-center justify-between'>
                    <div className='flex gap-x-2 items-center py-4'>
                        <input type="file" onChange={onImageChange} ref={inputRef} className='hidden' />
                        <button onClick={() => inputRef.current.click()} className='text-primary-900 text-2xl'>
                            <CiImageOn />
                        </button>
                        <button className='text-primary-900 text-2xl'>
                            <BsFillEmojiSmileFill />
                        </button>
                    </div>
                    <button className='btn btn--primary_fill text-sm py-2'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
