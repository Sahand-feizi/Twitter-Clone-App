import { useMutation } from '@tanstack/react-query'
import { singupUserApi } from '../../services/authServices'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useSingupUser() {
    const navigate = useNavigate()

    const { mutate: singupUser, isPending: isLoading } = useMutation({
        mutationFn: singupUserApi,
        onSuccess: () => {
            navigate('/')

            toast.success('Wellcome to the twitter!')
        },
        onError: ({ message }) => {
            toast.error(message)
        }
    })

    return { isLoading, singupUser }
}