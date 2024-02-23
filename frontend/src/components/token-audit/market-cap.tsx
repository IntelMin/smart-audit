import { formatNumber } from '@/utils/utils'
import Image from 'next/image'
import React from 'react'
import { MoonLoader } from 'react-spinners'


function marketCap({scanData}:any) {
    if(!scanData) return (
        <div className='bg-[#18181B]  h-[180px] rounded-xl flex flex-col justify-center items-center text-white space-y-3'>
            <MoonLoader color='white' />``
</div>
    )
const price_change = (scanData.price - scanData.price30)*100/scanData.price30
  return (
    <div className='bg-[#18181B]  h-[180px] rounded-xl flex flex-col justify-center items-center text-white space-y-3'>
        <div className='flex space-x-2'>
            <p className='text-[32px] font-bold text-white'>${scanData.price.toFixed(4)} </p>
            <div className='flex justify-center items-center  '><Image src={price_change > 0 ?"/icons/tokenaudit/arrow-up.svg":"/icons/tokenaudit/arrow-up.svg" } width={20} height={20} alt=''/><p>{price_change.toFixed(2)}% (30d)</p></div>
        </div>
        <div className='space-x-4'>
            <button className='bg-[#27272A] px-4 py-2 text-center rounded-[100px]'>
                <p>${formatNumber(Number(scanData.marketcap.toFixed(0)))}</p>
                <p className='uppercase text-[#71717A] text-sm'>Market Cap</p>
            </button>
            <button className='bg-[#27272A] px-8 py-2 text-center rounded-[100px]'>
                <p>{scanData.topHolders.total}</p>
                <p className='uppercase text-[#71717A] text-sm'>Holders</p>
            </button>
        </div>
    </div>
  )
}

export default marketCap