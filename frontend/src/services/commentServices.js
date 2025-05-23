import http from "./httpServices";

export const createCommentApi = ({ postId, data }) => {
    return http.post(`/posts/comment/${postId}`, data).then(({ data }) => data)
}