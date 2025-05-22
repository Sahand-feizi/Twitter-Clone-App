import useGetAuthUser from './useGetAuthUser'

export default function useAuthorize() {
    const { isLoading, authUser } = useGetAuthUser()

    let isAuthenticated = false;
    if (!isLoading && authUser)
        isAuthenticated = true;

    return { isLoading, isAuthenticated, authUser }
}