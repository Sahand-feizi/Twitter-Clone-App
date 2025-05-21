import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function HeaderProfile({ fullName, posts }) {
    const navigate = useNavigate()

    return (
        <div className='w-full flex items-center gap-x-8 px-4'>
            <button onClick={() => navigate('/')} className='text-secondary-800 text-lg'>
                <FaArrowLeft />
            </button>
            <div className='text-left'>
                <h2 className='text-lg text-secondary-900 font-bold'>{fullName}</h2>
                <p className='text-sm text-secondary-400'>{posts.length}posts</p>
            </div>
        </div>
    )
}

export default HeaderProfile
