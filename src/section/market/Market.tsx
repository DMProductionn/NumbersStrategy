'use client';

import { MarketItem } from '@/entities/MarketItem';
import { Container } from '@/shared/uikit/Container';
import { SekeletonItem } from './SkeletonItem';
import Image from 'next/image';
import { Loader } from '@/shared/uikit/Loader';
import { useEffect, useState } from 'react';
import useGetNumbers from './api/useGetNumbers';
import { ItemNumber } from '@/shared/types/responses.types';

export const Market: React.FC = () => {
  const [limit, setLimit] = useState(8);
  const [items, setItems] = useState<ItemNumber[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const { data: Numbers, isLoading: isLoadingGifts } = useGetNumbers(limit);

  useEffect(() => {
    if (Numbers?.items) {
      setItems([])
      // setItems((prev) => [...prev, ...Numbers.items.slice(prev.length)]);
      setLoadingMore(false);
    }
  }, [Numbers]);

  const handleViewMore = () => {
    setLoadingMore(true);
    setLimit((prev) => prev + 8);
  };

  return (
    <section className="mt-[60px] relative">
      <Image
        src="/effects/Blur_shapesMarket1.webp"
        className="w-[720px] h-[750px] absolute left-[0px] top-[170px] z-[0] max-sm:!hidden"
        width={720}
        height={750}
        alt="effect"
      />
      <Image
        src="/effects/Blur_shapesMarket2.webp"
        className="w-[800px] h-[900px] absolute right-0 top-[120px] z-[0] max-sm:!hidden"
        width={720}
        height={750}
        alt="effect"
      />
      <Container className="relative z-[999]">
        <div className="border border-white/10 bg-[#222228] rounded-[20px] p-[20px] min-h-[134px] w-full flex flex-col justify-center pl-[30px]">
          <p className="text-white/70 font-[500] leading-[24px]">
            Numbers Strategy is currently holding
          </p>
          <div className="mt-[10px] flex gap-x-[20px] gap-y-[10px] items-center max-sm:flex-col max-sm:items-start">
            <p className="font-[700] text-[50px] leading-[120%] max-sm:text-[40px]">
              <span>{isLoadingGifts ? 0 : !Numbers?.total ? 0 : Numbers.total}</span> numbers
            </p>
            <div className="flex items-center gap-[4px]">
              <p className="text-[20px] font-[500] leading-[30px]">
                <span>+34879.67</span> TON
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none">
                <path
                  d="M12.5 22.5C18.0229 22.5 22.5 18.0229 22.5 12.5C22.5 6.97714 18.0229 2.5 12.5 2.5C6.97714 2.5 2.5 6.97714 2.5 12.5C2.5 18.0229 6.97714 22.5 12.5 22.5Z"
                  fill="#0098EA"
                />
                <path
                  d="M16.0713 8.47949H9.24215C7.98651 8.47949 7.19065 9.83396 7.82236 10.9289L12.0371 18.2342C12.3121 18.7112 13.0014 18.7112 13.2764 18.2342L17.492 10.9289C18.1228 9.83571 17.3261 8.47949 16.0713 8.47949ZM12.0336 16.0435L11.1158 14.267L8.90097 10.3058C8.75486 10.0523 8.93533 9.72738 9.24129 9.72738H12.0328V16.0443L12.0336 16.0435ZM16.4108 10.305L14.1969 14.2678L13.279 16.0435V9.72653H16.0705C16.3764 9.72653 16.5569 10.0514 16.4108 10.305Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-[20px] bg-[#222228] rounded-[35px] border border-white/10 h-auto mt-[30px]">
          {items.length > 0 && (
            <div className="min-h-[64px] flex justify-center items-center bg-[#1A1A1F] rounded-[15px] mb-[20px] p-[20px]">
              <p className="text-white/70 font-[500] leading-[24px] text-center max-sm:text-[14px]">
                When selling NFTs, 100% of the proceeds are used to buy back and burn $NUMSTR
              </p>
            </div>
          )}

          {isLoadingGifts && items.length === 0 ? (
            <div className="grid grid-cols-4 gap-[10px] max-xl:grid-cols-3 max-sm:grid-cols-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <SekeletonItem key={i} />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col justify-center items-center min-h-[912px] max-lg:min-h-[400px] w-full">
              <div className="rounded-[15px] bg-[#1A1A1F] flex justify-center items-center h-[64px] max-w-[365px] w-full px-[30px] py-[20px]">
                <p className="font-[500] text-white/70 leading-[24px] tracking-[-0.02em] text-center">
                  There are no numbers available right now
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-4 gap-[10px] max-xl:grid-cols-3 max-sm:grid-cols-2">
                {items.map((item) => (
                  <MarketItem price={item.price} key={item.id} {...item.gift} />
                ))}
              </div>
              {Numbers?.hasMore !== false && (
                <div className="w-full flex justify-center items-center mt-[20px]">
                  <button
                    onClick={handleViewMore}
                    disabled={loadingMore}
                    className="bg-[#131316] h-[45px] min-w-[118px] inline-flex justify-center items-center rounded-[10px] border border-white/20 text-[#AEAFB1] text-[14px] leading-[20px] font-[500]">
                    {loadingMore ? <Loader /> : 'View more...'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
