import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUserProfileApi } from '../../services/userServices'
import { useEffect } from 'react';

export default function useGetUserProfile() {
    const { username } = useParams()

    const { data: user, isLoading, refetch } = useQuery({
        queryKey: ['userProfile'],
        queryFn: () => getUserProfileApi(username)
    })

    useEffect(() => {
        refetch()
    }, [username])

    return { user, isLoading }
}