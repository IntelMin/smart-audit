import Image from 'next/image'
import React from 'react'


function marketCap({token}:any) {
  return (
    <div className='bg-[#18181B]  h-[180px] rounded-xl flex flex-col justify-center items-center text-white space-y-3'>
        <div className='flex space-x-2'>
            <p className='text-[32px] font-bold text-white'>$0.1273 </p>
            <div className='flex justify-center items-center  '><Image src="/icons/tokenaudit/arrow-up.svg" width={20} height={20} alt=''/><p>36.73% (1d)</p></div>
        </div>
        <div className='space-x-4'>
            <button className='bg-[#27272A] px-4 py-2 text-center rounded-[100px]'>
                <p>$1.237M</p>
                <p className='uppercase text-[#71717A] text-sm'>Market Cap</p>
            </button>
            <button className='bg-[#27272A] px-8 py-2 text-center rounded-[100px]'>
                <p>472</p>
                <p className='uppercase text-[#71717A] text-sm'>Holders</p>
            </button>
        </div>
    </div>
  )
}

export default marketCap