import http from "./httpServices";

export const getSuggestedUsersApi = () => {
    return http.get('/users/suggested').then(({ data }) => data)
}

export const getUserProfileApi = (username) => {
    return http.get(`/users/profile/${username}`).then(({ data }) => data)
}

export const followUserApi = (id) => {
    return http.post(`/users/follow/${id}`).then(({ data }) => data)
}