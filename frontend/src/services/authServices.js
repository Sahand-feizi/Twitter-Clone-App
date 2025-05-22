import http from "./httpServices";

export const singupUserApi = (data) => {
    return http.post('/auth/signup', data).then(({ data }) => data)
}

export const loginUserApi = (data) => {
    return http.post('/auth/login', data).then(({ data }) => data)
}

export const getAuthUser = () => {
    return http.get('/auth/me').then(({ data }) => data)
}

export const logoutUserApi = () => {
    return http.post('/auth/logout').then(({ data }) => data)
}