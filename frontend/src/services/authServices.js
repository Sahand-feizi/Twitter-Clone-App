import http from "./httpServices";

export const singupUserApi = (data) => {
    return http.post('/auth/signup', data).then(({ data }) => data)
}

export const getAuthUser = () => {
    return http.get('/auth/me').then(({ data }) => data)
}