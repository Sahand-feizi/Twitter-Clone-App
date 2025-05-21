import React from 'react'
import useOutSideClick from '../hooks/useOutSideClick'

function Modal({ isOpen, setIsOpen, children }) {
    const { itemRef } = useOutSideClick(
        () => setIsOpen(false)
    )

    if (!isOpen) return null
    return (
        <div id='modal' ref={itemRef} className='w-[calc(100%-1rem)] p-4 bg-secondary-0 border border-secondary-400 rounded-lg top-[30%] fixed left-4 max-h-[calc(100%-1rem)]'>
            {children}
        </div>
    )
}

export default Modal
