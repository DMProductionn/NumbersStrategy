import { BASE_URL_GECKO } from "@/shared/api/base_url";
import { ITokensResponse } from "@/shared/types/responses.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getTokens = async () => {
  const { data } = await axios.get<ITokensResponse>(`${BASE_URL_GECKO}/networks/ton/tokens/EQDzUrSxwxPJiD5aBUg-HOMlIFscZLZWJ06eOKU-0uDkR04k`);
  return data.data.attributes
}

const useGetTokens = () => {
  return useQuery({
    queryKey: ['tokens'],
    queryFn: getTokens
  })
}

export default useGetTokens