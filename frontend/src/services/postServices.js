import http from './httpServices'

export const getPostsApi = (url) => {
    return http.get(url).then(({ data }) => data)
}