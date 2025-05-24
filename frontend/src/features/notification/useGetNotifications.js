import { useQuery } from '@tanstack/react-query';
import { } from 'react-hot-toast';
import { getNotificationsApi } from '../../services/notificationServices';

export default function useGetNotifications() {
    const { data: notifications, isLoading } = useQuery({
        queryKey: ['notifications'],
        queryFn: getNotificationsApi
    })

    return { notifications, isLoading }
}