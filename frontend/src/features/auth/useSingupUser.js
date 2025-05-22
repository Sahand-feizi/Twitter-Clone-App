import { useMutation, useQueryClient } from '@tanstack/react-query'
import { singupUserApi } from '../../services/authServices'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useSingupUser() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: singupUser, isPending: isLoading } = useMutation({
        mutationFn: singupUserApi,
        onSuccess: () => {
            navigate('/')
            queryClient.invalidateQueries({
                queryKey: ['authUser']
            })

            toast.success('Wellcome to the twitter!')
        },
        onError: (err) => {
            toast.error(err?.response?.data?.error)
        }
    })

    return { isLoading, singupUser }
}