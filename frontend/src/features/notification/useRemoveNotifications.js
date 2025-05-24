import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast, { } from 'react-hot-toast';
import { removeNotificationsApi } from '../../services/notificationServices';

export default function useRemoveNotifications() {
    const queryClient = useQueryClient();

    const { mutate: removeNotifications, isPending: isDeleting } = useMutation({
        mutationFn: removeNotificationsApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['notifications']
            })
            toast.success('Notifications removed successfuly')
        },
        onError: ({ message }) => {
            toast.error(message)
        }
    })

    return { removeNotifications, isDeleting }
}