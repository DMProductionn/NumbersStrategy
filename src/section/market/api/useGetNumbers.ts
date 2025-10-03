import { $api } from "@/shared/api/api";
import { INumbersResponse } from "@/shared/types/responses.types";
import { useQuery } from "@tanstack/react-query";

const getNumbers = async (limit: number) => {
  const { data } = await $api.get<INumbersResponse>(`/gifts/my?offset=0&limit=${limit}&isWallet=false`);
  return data
}

const useGetNumbers = (limit: number) => {
  return useQuery({
    queryKey: ['numbers', limit],
    queryFn: () => getNumbers(limit),
  })
}

export default useGetNumbers