import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast, { } from 'react-hot-toast'
import { createCommentApi } from '../../services/commentServices';

export default function useCreateComment() {
    const queryClient = useQueryClient()

    const { mutate: createComment, isPending: isCreating } = useMutation({
        mutationFn: createCommentApi,
        onSuccess: (updatedPost) => {
            queryClient.setQueryData(['posts'], (oldPosts) => {
                return oldPosts.map(post => {
                    if(post._id == updatedPost._id)
                        return {...post, comments: updatedPost.comments}
                    return post
                })
            })
            toast.success("Comment add successfuly")
        },
        onError: ({ message }) => {
            toast.error(message)
        }
    })

    return { createComment, isCreating }
}