import http from "./httpServices";

export const getSuggestedUsersApi = () => {
    return http.get('/users/suggested').then(({ data }) => data)
}