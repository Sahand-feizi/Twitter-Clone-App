import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { logoutUserApi } from "../../services/authServices"
import { toast } from "react-hot-toast"

export default function useLogoutUser() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: logoutUser, isPending: isLoading } = useMutation({
        mutationFn: logoutUserApi,
        onSuccess: () => {
            navigate('/login')
            queryClient.invalidateQueries({
                queryKey: ['authUser']
            })
            toast.success('Logout successfuly')
        },
        onError: (err) => {
            toast.error(err?.response?.data?.error)
        }
    })

    return { logoutUser, isLoading }
}