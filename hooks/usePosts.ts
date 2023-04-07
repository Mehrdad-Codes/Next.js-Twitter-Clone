import useSwr from "swr";
import { Post, Prisma } from "@prisma/client";

import fetcher from "@/libs/fetcher";

const usePosts = (userId?: string) => {
  const url = userId ? `/api/posts?userId=${userId}` : "/api/posts";
  const { data, error, isLoading, mutate } = useSwr<
    Prisma.PostGetPayload<{ include: { user: true } }>[]
  >(url, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;
