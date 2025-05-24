import http from './httpServices'

export const getNotificationsApi = () => {
    return http.get('/notifications/').then(({ data }) => data)
}