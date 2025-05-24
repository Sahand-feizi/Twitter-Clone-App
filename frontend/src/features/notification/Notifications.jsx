import React from 'react'
import Notification from './Notification'
import useGetNotifications from './useGetNotifications'

function Notifications() {
    const { notifications, isLoading } = useGetNotifications()
    
    if (!notifications)
        return (
            <div className='w-full'>
                <h3 className="text-lg text-secondary-900 font-bold text-left">
                    There are no notifications
                </h3>
            </div>
        )

    return (
        <div className='w-full'>
            {
                notifications.map(notifiction => (
                    <Notification key={notifiction._id} {...notifiction} />
                ))
            }
        </div>
    )
}

export default Notifications
