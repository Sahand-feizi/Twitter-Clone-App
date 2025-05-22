import { useQuery } from "@tanstack/react-query"
import { getPostsApi } from "../../services/postServices"

export default function useGetPosts(feedType, username, userId) {
  function getPostEndPoint() {
    switch (feedType) {
      case 'forYou':
        return '/posts/all'
      case 'following':
        return '/posts/following'
      case 'posts':
        return `/posts/user/${username}`
      case 'likes':
        return `/posts/likes/${userId}`
    }
  }
  const POST_ENDPOINT = getPostEndPoint()

  const { data: posts, isLoading, refetch: postsRefetch, isRefetching } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPostsApi(POST_ENDPOINT)
  })

  return { posts, isLoading, postsRefetch, isRefetching }
}
