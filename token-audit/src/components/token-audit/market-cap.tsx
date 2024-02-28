import { formatNumber } from "@/utils/utils";
import Image from "next/image";
import React from "react";
import { MoonLoader } from "react-spinners";

function marketCap({ scanData }: any) {
  if (!scanData)
    return (
      <div className='bg-[#18181B]  h-[180px] rounded-xl flex flex-col justify-center items-center text-white space-y-3'>
        <Image
          src='/loadingAnimation.gif'
          width={100}
          height={100}
          alt=''
        />
      </div>
    );
  const price_change =    ((scanData.price - scanData.price30) * 100) / scanData.price30;
  // const price_change = 0.1273;
  return (
    <div className='bg-[#18181B] p-2  h-[180px] rounded-xl flex flex-col justify-center items-center text-white space-y-3 '>
      <div className='flex space-x-2'>
        <p className='lg:text-[32px] text-[28px] font-bold text-white'>
          ${(scanData.price ?? 0).toFixed(4)}{" "}
          {/* $0.1273 */}
        </p>
        <div className='flex justify-center items-center  '>
          <Image
            src={
              price_change > 0
                ? "/icons/tokenaudit/arrow-up.svg"
                : "/icons/tokenaudit/arrow-up.svg"
            }
            width={20}
            height={20}
            alt=''
          />
          <p className='bg-gradient-to-r from-[#07b7ec] text-transparent bg-clip-text text-xl to-[#8e35ea] '>
            {price_change.toFixed(2)}% (30d)
          </p>
        </div>
      </div>
      <div className='flex gap-4'>
        <button className='bg-[#27272A] px-4 py-2 text-center rounded-[100px]'>
          <p>${formatNumber(Number((scanData.marketcap ?? 0).toFixed(0)))}</p>
          {/* <p>$1.27M</p> */}
          <p className='uppercase text-[#71717A] text-sm'>Market Cap</p>
        </button>
        <button className='bg-[#27272A] px-4 py-2 text-center rounded-[100px]'>
          <p>{scanData?.topHolders?.total}</p>
          {/* <p>472</p> */}
          <p className='uppercase text-[#71717A] text-sm'>Holders</p>
        </button>
      </div>
    </div>
  );
}

export default marketCap;
