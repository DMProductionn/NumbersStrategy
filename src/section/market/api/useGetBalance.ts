import { BASE_URL_BALANCE } from "@/shared/api/base_url";
import { IBalanceResponse } from "@/shared/types/responses.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getBalance = async () => {
  const { data } = await axios.get<IBalanceResponse>(`${BASE_URL_BALANCE}/balance`);
  return data
}

const useGetBalance = () => {
  return useQuery({
    queryKey: ['balance'],
    queryFn: getBalance,
  })
}

export default useGetBalance