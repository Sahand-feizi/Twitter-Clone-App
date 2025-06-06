import http from './httpServices'

export const getNotificationsApi = () => {
    return http.get('/notifications/').then(({ data }) => data)
}

export const removeNotificationsApi = () => {
    return http.delete('/notifications/').then(({ data }) => data)
}