import useSwr from "swr";

import fetcher from "@/libs/fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/users", fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
