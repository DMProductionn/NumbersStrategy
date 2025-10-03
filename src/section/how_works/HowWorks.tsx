'use client';

import { Container } from '@/shared/uikit/Container';

import Image from 'next/image';

export const HowWorks: React.FC = () => {
  return (
    <section className="mt-[100px] relative max-xl:mt-[350px]">
      <Image
        src="/effects/Blur_shapes3.webp"
        className="w-[720px] h-[750px] absolute left-[0px] -top-[180px] z-[0] max-sm:!hidden"
        width={720}
        height={750}
        alt="effect"
      />
      <Image
        src="/effects/Blur_shapes4.webp"
        className="w-[750px] h-[900px] absolute right-0 -top-[290px] z-[0] max-sm:!hidden"
        width={720}
        height={750}
        alt="effect"
      />
      <Image
        src="/main.webp"
        className="!w-[405px] !h-[360px] max-w-none absolute -top-[250px] -right-[30px] z-[0] 
             max-xl:right-auto max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:-top-[360px] !hidden max-xl:!block
             object-cover"
        width={600}
        height={450}
        alt="effect"
      />
      <Container className="relative">
        <Image
          src="/BigSquare.webp"
          className="w-[800px] h-[800px] absolute -right-[13px] -bottom-[310px] z-[0] max-sm:!hidden"
          width={800}
          height={800}
          alt="effect"
        />
        <div className="relative z-[999] rounded-[35px] border border-white/10 bg-[#22222859]/35 backdrop-blur-[10px] pt-[30px] max-sm:pt-[20px] px-[20px] pb-[20px]">
          <Image
            src="/main.webp"
            className="!w-[440px] !h-[430px] max-w-none absolute -top-[370px] right-[10px] z-[0] 
             max-xl:right-auto max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:-top-[360px] max-xl:!hidden
             object-cover"
            width={440}
            height={430}
            alt="effect"
          />
          <div className="pl-[20px]">
            <h2 className="font-[500] text-[50px] leading-[120%] mb-[10px] max-sm:text-[30px]">
              How it works?
            </h2>
            <p className="text-[20px] leading-[30px] font-[500] text-[#B4B4B5] mb-[40px] max-sm:text-[14px] max-sm:leading-[20px] max-sm:mb-[30px]">
              A simple mechanism for buying and selling Telegram Numbers while burning token supply, forever.
            </p>
          </div>

          <div className="flex gap-[10px] max-xl:grid max-xl: grid-cols-1">
            <div className="shadow-[0_15px_15px_rgba(0,0,0,0.65)] px-[30px] pt-[20px] pb-[25px] max-w-[272px] max-xl:max-w-full h-[180px] w-full relative bg-[#131316] overflow-hidden rounded-[20px] border border-white/10">
              <Image
                src="/effects/Blur_shapes.webp"
                className="w-[300px] h-[160px] absolute -top-[30px] -right-[0px] z-[0]"
                width={300}
                height={340}
                alt="effect"
              />
              <div className="relative z-10">
                <p className="font-[600] text-[30px] leading-[36px] mb-[20px]">1st</p>
                <p className="text-gray leading-[20px] text-[14px] font-[500] tracking-[-0.02em]">
                  10% of each trade of $NUMSTR is taken as a fee and stored in the protocol (minus
                  1% for $GIFTSTR and 1% dev)
                </p>
              </div>
            </div>
            <div className="shadow-[0_15px_15px_rgba(0,0,0,0.65)] mt-[40px] max-xl:mt-0 h-[180px] px-[30px] pt-[20px] pb-[25px] max-w-[272px] max-xl:max-w-full w-full relative bg-[#131316] overflow-hidden rounded-[20px] border border-white/10">
              <Image
                src="/effects/Blur_shapes2.webp"
                className="w-[300px] h-[160px] absolute -top-[30px] -right-[0px] z-[0]"
                width={300}
                height={340}
                alt="effect"
              />
              <div className="relative z-10">
                <p className="font-[600] text-[30px] leading-[36px] mb-[20px]">2nd</p>
                <p className="text-gray leading-[20px] text-[14px] font-[500] tracking-[-0.02em]">
                  When there&apos;s enough fees in the pool, The Degen Engine buys a floor number
                </p>
              </div>
            </div>
            <div className="shadow-[0_15px_15px_rgba(0,0,0,0.65)] h-[180px] px-[30px] pt-[20px] pb-[25px] max-w-[272px] max-xl:max-w-full w-full relative bg-[#131316] overflow-hidden rounded-[20px] border border-white/10">
              <Image
                src="/effects/Blur_shapes_small1.webp"
                className="w-[300px] h-[160px] absolute -top-[30px] -right-[0px] z-[0]"
                width={300}
                height={340}
                alt="effect"
              />
              <div className="relative z-10">
                <p className="font-[600] text-[30px] leading-[36px] mb-[20px]">3rd</p>
                <p className="text-gray leading-[20px] text-[14px] font-[500] tracking-[-0.02em]">
                  The gift automatically gets listed for 1.2x the price
                </p>
              </div>
            </div>
            <div className="shadow-[0_15px_15px_rgba(0,0,0,0.65)] mt-[40px] max-xl:mt-0 h-[180px] px-[30px] pt-[20px] pb-[25px] max-w-[272px] max-xl:max-w-full w-full relative bg-[#131316] overflow-hidden rounded-[20px] border border-white/10">
              <Image
                src="/effects/Blur_shapes.webp"
                className="w-[300px] h-[160px] absolute -top-[30px] -right-[0px] z-[0]"
                width={300}
                height={340}
                alt="effect"
              />
              <div className="relative z-10">
                <p className="font-[600] text-[30px] leading-[36px] mb-[20px]">4th</p>
                <p className="text-gray leading-[20px] text-[14px] font-[500] tracking-[-0.02em]">
                  When the number is sold, all of the TON buys and burns $NUMSTR
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
