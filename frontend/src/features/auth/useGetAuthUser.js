import { useQuery } from '@tanstack/react-query'
import { getAuthUser } from '../../services/authServices'

export default function useGetAuthUser() {
    const { data: authUser, isLoading } = useQuery({
        queryKey: ['authUser'],
        queryFn: getAuthUser
    })

    return { authUser, isLoading }
}