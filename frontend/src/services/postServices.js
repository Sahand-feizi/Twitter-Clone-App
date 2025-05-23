import http from './httpServices'

export const getPostsApi = (url) => {
    return http.get(url).then(({ data }) => data)
}

export const createPostApi = (data) => {
    return http.post('/posts/create', data).then(({ data }) => data)
}

export const removePostApi = (postId) => {
    return http.delete(`/posts/${postId}`).then(({ data }) => data)
}

export const likePostApi = (postId) => {
    return http.post(`/posts/like/${postId}`).then(({ data }) => data)
}