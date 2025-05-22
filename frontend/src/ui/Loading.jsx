import React from 'react'

const loadingSize = {
    xs: 'loading-xs',
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg',
    xl: 'loading-xl'
}

function Loading({ size }) {
    return (
        <span className={`loading loading-spinner ${loadingSize[size]}`}></span>
    )
}

export default Loading