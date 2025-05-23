import React from 'react'
import useOutSideClick from '../hooks/useOutSideClick'

function Modal({ isOpen, setIsOpen, children }) {
    const { itemRef } = useOutSideClick(
        () => setIsOpen(false)
    )

    if (!isOpen) return null
    return (
        <div id='modal' ref={itemRef} className='max-w-sm fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-100 p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto no-scrollbar'>
            {children}
        </div>
    )
}

export default Modal
