import { formatNumber } from "@/utils/utils";
import Image from "next/image";
import React from "react";
import { MoonLoader } from "react-spinners";

<<<<<<< HEAD


function marketCap({scanData,liveData,infoData}:any) {
  console.log(liveData)
  if(!scanData) return (
    <div className='bg-[#18181B]  h-[180px] rounded-xl flex flex-col justify-center items-center text-white space-y-3'>
      <Image src="/loadingAnimation.gif" width={100} height={100} alt=""/>
    </div>
  )
  const marketCap = (Number(infoData?.circulating_market_cap??0)/Number(infoData?.exchange_rate??0))*Number(liveData?.priceUsd??0)
  return (
      <div className='bg-[#18181B]  h-[180px] rounded-xl flex flex-col justify-center items-center text-white space-y-3 '>
        <div className='flex space-x-2'>
          <p className='text-[32px] font-bold text-white'>${Number(liveData?.priceUsd??0).toFixed(4)} </p>
          <div className='flex justify-center items-center  '><Image src={liveData?.priceChange?.h24 > 0 ?"/icons/tokenaudit/arrow-up.svg":"/icons/tokenaudit/arrow-up.svg" } width={20} height={20} alt=''/><p>{liveData?.priceChange?.h24}% (1d)</p></div>
        </div>
        <div className='space-x-4'>
          <button className='bg-[#27272A] px-4 py-2 text-center rounded-[100px]'>
            <p>${formatNumber(Number((marketCap??0).toFixed(0)))}</p>
            <p className='uppercase text-[#71717A] text-sm'>Market Cap</p>
          </button>
          <button className='bg-[#27272A] px-8 py-2 text-center rounded-[100px]'>
            <p>{scanData?.topHolders?.total}</p>
            <p className='uppercase text-[#71717A] text-sm'>Holders</p>
          </button>
        </div>
      </div>

=======
function marketCap({ scanData, liveData, infoData }: any) {
  console.log(liveData);
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
  const marketCap =
    (Number(infoData?.circulating_market_cap ?? 0) /
      Number(infoData?.exchange_rate ?? 0)) *
    Number(liveData?.priceUsd ?? 0);
  return (
    <div>
      <div className='bg-[#18181B]  h-[180px] rounded-xl flex flex-col justify-center items-center text-white space-y-3 '>
        <div className='flex space-x-2'>
            <p className='text-[32px] font-bold text-white'>${(scanData.price??0).toFixed(4)} </p>
            <div className='flex justify-center items-center  '><Image src={price_change > 0 ?"/icons/tokenaudit/arrow-up.svg":"/icons/tokenaudit/arrow-up.svg" } width={20} height={20} alt=''/><p>{price_change.toFixed(2)}% (30d)</p></div>
        </div>
        <div className='space-x-4'>
            <button className='bg-[#27272A] px-4 py-2 text-center rounded-[100px]'>
                <p>${formatNumber(Number((scanData.marketcap??0).toFixed(0)))}</p>
                <p className='uppercase text-[#71717A] text-sm'>Market Cap</p>
            </button>
            <button className='bg-[#27272A] px-8 py-2 text-center rounded-[100px]'>
                <p>{scanData?.topHolders?.total}</p>
                <p className='uppercase text-[#71717A] text-sm'>Holders</p>
            </button>
        </div>
      </div>
      {/* <div className='flex gap-4'>
        <button className='bg-[#27272A] px-4 py-2 text-center rounded-[100px]'>
          <p>${formatNumber(Number((scanData.marketcap ?? 0).toFixed(0)))}</p>
       
          <p className='uppercase text-[#71717A] text-sm'>Market Cap</p>
        </button>
        <button className='bg-[#27272A] px-4 py-2 text-center rounded-[100px]'>
          <p>{scanData?.topHolders?.total}</p>
         
          <p className='uppercase text-[#71717A] text-sm'>Holders</p>
        </button>
      </div> */}
    </div>
>>>>>>> 11be745d999d91d00e6e972d865da14403236396
  );
}

export default marketCap;
