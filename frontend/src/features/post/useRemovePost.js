import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { removePostApi } from '../../services/postServices'

export default function useRemovePost() {
    const queryClient = useQueryClient()
    const { mutate: removePost, isPending: isDeleting } = useMutation({
        mutationFn: removePostApi,
        onSuccess: (removePost) => {
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
            toast.success('Post removed successfuly')
        },
        onError: ({ message }) => {
            toast.error(message)
        }
    })

    return { removePost, isDeleting }
}