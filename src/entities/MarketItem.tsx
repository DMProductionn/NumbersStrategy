'use client';

import { TypeNumber } from '@/shared/types/responses.types';
import { formatTwoDecimals } from '@/shared/utils/formats';
import Image from 'next/image';

type IMarketItemProps = TypeNumber & {
  price: string;
};

export const MarketItem: React.FC<IMarketItemProps> = ({ image_url, model_name, price }) => {
  const priceFormatted = Number(price) / 1000000000;

  return (
    <div className="flex flex-col">
      <div
        className="bg-[#424242] rounded-t-[15px] flex justify-center items-center relative overflow-hidden
             min-h-[273px] max-h-[273px] max-lg:min-h-auto max-lg:max-h-[273px]">
        <div className="relative w-full h-full max-lg:h-auto">
          {image_url && (
            <Image
              src={image_url}
              alt="picture"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="bg-[#313237] rounded-b-[20px] p-[20px] pt-[10px] flex-1">
        <p className="text-[20px] font-[600] leading-[30px] max-sm:text-[16px] max-sm:leading-[24px]">
          {model_name}
        </p>
        <p className="font-[500] leading-[24px] text-gray max-sm:text-[14px] max-sm:leading-[20px]">
          <span>{formatTwoDecimals(priceFormatted)}</span> TON
        </p>
      </div>
    </div>
  );
};
