import React from 'react'
import Sidbar from './Sidbar'
import { Outlet } from 'react-router-dom'
import SuggestedUsers from '../features/user/SuggestedUsers'

function AppLayout() {
    return (
        <div className='grid pt-5 !w-full grid-cols-[5rem_1fr] md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem] container'>
            <Sidbar />
            <Outlet />
            <SuggestedUsers />
        </div>
    )
}

export default AppLayout
