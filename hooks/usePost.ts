import useSwr from "swr";
import { Post, Prisma } from "@prisma/client";

import fetcher from "@/libs/fetcher";
type PostWithData = Prisma.PostGetPayload<{
  include: { user: true; comments: true };
}>;
const usePost = (postId?: string) => {
  const url = postId ? `/api/posts/${postId}` : null;
  const { data, error, isLoading, mutate } = useSwr<
    PostWithData | PostWithData[]
  >(url, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePost;
