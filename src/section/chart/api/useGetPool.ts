import { BASE_URL_GECKO } from "@/shared/api/base_url";
import { IPoolsResponse } from "@/shared/types/responses.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPool = async () => {
  const { data } = await axios.get<IPoolsResponse>(`${BASE_URL_GECKO}/networks/ton/pools/EQCyFe3Qz0gL-I1CwT4lSK3L97u7GcVPhPtGjEZ6fjpxR7bG`);
  return data.data.attributes
}

const useGetPools = () => {
  return useQuery({
    queryKey: ['pools'],
    queryFn: getPool
  })
}

export default useGetPools