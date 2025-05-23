import { useQuery } from '@tanstack/react-query'
import { } from 'react-hot-toast'
import { getSuggestedUsersApi } from '../../services/userServices'

export default function useGetSuggestedUsers() {
    const { data: suggestedUsers, isLoading } = useQuery({
        queryKey: ['suggestedUsers'],
        queryFn: getSuggestedUsersApi
    })

    return { suggestedUsers, isLoading }
}