import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPostApi } from '../../services/postServices'
import { toast } from 'react-hot-toast'

export default function useCreatePost() {
    const queryClient = useQueryClient()
    const { mutate: createPost, isPending: isCreating } = useMutation({
        mutationFn: createPostApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
            toast.success('Post created successfully')
        },
        onError: ({ message }) => {
            toast.error(message)
        }
    })

    return { createPost, isCreating }
}