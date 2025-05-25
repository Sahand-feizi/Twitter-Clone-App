import React from 'react'
import Notification from './Notification'
import useGetNotifications from './useGetNotifications'

function Notifications() {
    const { notifications, isLoading } = useGetNotifications()

    return (
        <div className='w-full'>
            {
                notifications?.length > 0 ? (
                    notifications.map(notifiction => (
                        <Notification key={notifiction._id} {...notifiction} />
                    ))
                ) : (
                    <h1 className='text-secondary-900 text-lg font-bold my-4 text-center'>No Notifications 🤔</h1>
                )
            }
        </div>
    )
}

export default Notifications
