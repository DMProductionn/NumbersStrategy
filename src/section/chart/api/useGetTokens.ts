import { BASE_URL_GECKO } from "@/shared/api/base_url";
import { ITokensResponse } from "@/shared/types/responses.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getTokens = async () => {
  const { data } = await axios.get<ITokensResponse>(`${BASE_URL_GECKO}/networks/ton/tokens/EQA9VQKbj4MSB0k-7sK1UrYyIgn9UnUpGXpUckBe9-osl0dj`);
  return data.data.attributes
}

const useGetTokens = () => {
  return useQuery({
    queryKey: ['tokens'],
    queryFn: getTokens
  })
}

export default useGetTokens