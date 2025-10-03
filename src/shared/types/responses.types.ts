export interface ITokensResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      address: string;
      name: string;
      symbol: string;
      decimals: number;
      image_url: string;
      coingecko_coin_id: string;
      total_supply: string;
      normalized_total_supply: string;
      price_usd: string;
      fdv_usd: string;
      total_reserve_in_usd: string;
      volume_usd: {
        h24: string;
      };
      market_cap_usd: string;
    };
    relationships: {
      top_pools: {
        data: {
          id: string;
          type: string;
        }[];
      };
    };
  };
}

export interface IPoolsResponse {
  data: {
    id: string;
    attributes: {
      address: string;
      base_token_price_native_currency: string;
      base_token_price_quote_token: string;
      base_token_price_usd: string;
      fdv_usd: string;
      locked_liquidity_percentage: string;
      market_cap_usd: string;
      name: string;
      pool_created_at: string;
      pool_fee_percentage: string;
      pool_name: string;
      price_change_percentage: {
        m5: string;
        m15: string;
        m30: string;
        h1: string;
        h6: string;
        h24: string;
        [key: string]: string;
      };
      quote_token_price_base_token: string;
      quote_token_price_native_currency: string;
      quote_token_price_usd: string;
      reserve_in_usd: string;
      transactions: {
        m5: Record<string, string>;
        m15: Record<string, string>;
        m30: Record<string, string>;
        h1: Record<string, string>;
        h6: Record<string, string>;
        [key: string]: Record<string, string>;
      };
      volume_usd: {
        m5: string;
        m15: string;
        m30: string;
        h1: string;
        h6: string;
        h24: string;
        [key: string]: string;
      };
    };
  };
}

export type TypeNumber = {
  external_id: string;
  emoji_id: string;
  image_url: string;
  collection: string;
  model_name: string;
  model_rarity_per_mille: number;
  symbol_name: string;
  symbol_rarity_per_mille: number;
  backdrop_name: string;
  backdrop_rarity_per_mille: number;
  rarity_score: number;
};

export type ItemNumber = {
  id: string;
  owned_gift_id: string;
  external_id: string;
  image_url: string;
  collection: string;
  price: string;
  market_source: string;
  state: string;
  task_coef: string;
  gift_id: number;
  latest_operation_type: string;
  latest_operation_created_at: string;
  latest_operation_is_pending: boolean;
  display_number: string;
  thermos_id: string;
  lottie_url: string;
  model_name: string;
  model_rarity_per_mille: number;
  symbol_name: string;
  symbol_rarity_per_mille: number;
  backdrop_name: string;
  backdrop_rarity_per_mille: number;
  rarity_score: number;
  gift: TypeNumber;
};

export interface INumbersResponse {
  hasMore: boolean;
  limit: number;
  offset: number;
  total: number;
  items: ItemNumber[];
}
