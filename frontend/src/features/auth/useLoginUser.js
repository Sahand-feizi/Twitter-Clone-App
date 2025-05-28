import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUserApi } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLoginUser() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: loginUser, isPending: isLoading } = useMutation({
        mutationFn: loginUserApi,
        onSuccess: () => {
            navigate('/')
            queryClient.invalidateQueries({
                queryKey: ['authUser']
            })
            toast.success('Wellcome to Twitter app')
        },
        onError: (err) => {
            toast.error(err?.response?.data?.error)
        }
    })

    return { loginUser, isLoading }
}