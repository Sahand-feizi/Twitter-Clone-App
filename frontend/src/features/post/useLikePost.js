import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast, { } from 'react-hot-toast'
import { likePostApi } from '../../services/postServices';

export default function useLikePost(id) {
    const queryClient = useQueryClient()

    const { mutate: likePost, isPending: isUpdating } = useMutation({
        mutationFn: likePostApi,
        onSuccess: (likedPost) => {
            queryClient.setQueryData(['posts'], (oldPosts) => {
               return oldPosts.map(post => {
                    if (post._id == id)
                        return { ...post, likes: likedPost }
                    return post
                })
            })
        },
        onError: ({ message }) => {
            toast.error(message)
        }
    })

    return { likePost, isUpdating }
}