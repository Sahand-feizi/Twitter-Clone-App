import React from 'react'
import NotificationHeader from '../features/notification/NotificationHeader'
import Notifications from '../features/notification/Notifications'

function Notification() {
  return (
    <div className='border-r border-r-secondary-400'>
      <NotificationHeader />
      <Notifications />
    </div>
  )
}

export default Notification
