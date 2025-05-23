import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast, { } from 'react-hot-toast';
import { followUserApi } from '../services/userServices';

export default function useFollowUser() {
    const queryClient = useQueryClient();

    const { mutate: followUser, isPending: isFollowing } = useMutation({
        mutationFn: followUserApi,
        onSuccess: (followedUser) => {
            Promise.all([
                queryClient.invalidateQueries({
                    queryKey: ['authUser']
                }),
                queryClient.invalidateQueries({
                    queryKey: ['suggestedUsers']
                })
            ])
        },
        onError: ({ message }) => {
            toast.error(message)
        }
    })

    return { followUser, isFollowing }
}