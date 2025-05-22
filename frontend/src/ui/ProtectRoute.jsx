import React, { useEffect } from 'react'
import useAuthorize from '../features/auth/useAuthorize'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

function ProtectRoute({children}) {
    const { isAuthenticated, isLoading, authUser } = useAuthorize()
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoading && !isAuthenticated)
            return navigate('/login')
    }, [authUser, isAuthenticated, isLoading])

    if(isLoading)
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <Loading size='xl'/>
            </div>
        )
     

    if(!isLoading && isAuthenticated && authUser) return children
}

export default ProtectRoute
