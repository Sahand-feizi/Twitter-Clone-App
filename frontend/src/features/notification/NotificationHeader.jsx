import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import useOutSideClick from '../../hooks/useOutSideClick';
import useRemoveNotifications from './useRemoveNotifications'

function NotificationHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const { itemRef } = useOutSideClick(
        () => setIsOpen(false)
    )
    const { removeNotifications, isDeleting } = useRemoveNotifications()

    return (
        <div className='w-full flex items-center justify-between p-3 border-b border-b-secondary-400'>
            <h3 className='text-lg text-secondary-900 font-bold'>Notifications</h3>
            <div className='relative flex items-center'>
                <button onClick={() => setIsOpen(true)} className='text-secondary-900 text-lg'>
                    <IoSettingsOutline />
                </button>
                <ul ref={itemRef} className={`hidden absolute right-0 -bottom-8 w-72 bg-secondary-100 rounded-lg ${isOpen && '!flex'}`}>
                    <li className='w-full'>
                        <button onClick={removeNotifications} className='p-2 bg-transparent hover:bg-secondary-200 text-secondary-900 text-sm w-full text-left rounded-lg'>Delete All Notifications</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NotificationHeader
