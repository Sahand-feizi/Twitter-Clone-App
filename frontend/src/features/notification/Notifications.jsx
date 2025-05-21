import React from 'react'
import { NOtifications } from '../../db/dummyData'
import Notification from './Notification'

function Notifications() {
    const isLoading = false;

    return (
        <div className='w-full'>
            {
                NOtifications.map(notifiction => (
                    <Notification {...notifiction} />
                ))
            }
        </div>
    )
}

export default Notifications
