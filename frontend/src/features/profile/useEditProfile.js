import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast, { } from 'react-hot-toast';
import { editProfileApi } from '../../services/userServices';

export default function useEditProfile() {
    const queryClient = useQueryClient()

    const { mutateAsync: updateProfile, isPending: isUpdating } = useMutation({
        mutationFn: editProfileApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['authUser']
            })
            queryClient.invalidateQueries({
                queryKey: ['userProfile']
            })
            toast.success('Profile Edit successfuly')
        },
        onError: ({ message }) => {
            toast.error(message)
        }
    })

    return { updateProfile, isUpdating }
}