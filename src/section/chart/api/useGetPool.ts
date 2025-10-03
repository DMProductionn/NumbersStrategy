import { BASE_URL_GECKO } from "@/shared/api/base_url";
import { IPoolsResponse } from "@/shared/types/responses.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPool = async () => {
  const { data } = await axios.get<IPoolsResponse>(`${BASE_URL_GECKO}/networks/ton/pools/EQAM57dODrAJVf4q2Y7R5EU7S3VJWrqH24APbaASXi3vbQPy`);
  return data.data.attributes
}

const useGetPools = () => {
  return useQuery({
    queryKey: ['pools'],
    queryFn: getPool
  })
}

export default useGetPools