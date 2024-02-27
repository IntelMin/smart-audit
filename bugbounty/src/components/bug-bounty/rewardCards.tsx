import Image from 'next/image'
import React from 'react'

function rewardCards() {
  
  return (
    <div>
        <div className='flex w-[279px] h-[142px] justify-between py-4 px-4 items-center rounded-2xl border-white rounded-r-4 relative bg-[url(/inside-curve.svg)] object-cover'>
           <div className='flex flex-col justify-start items-start h-full space-y-2'>
           <Image src="/di.png" alt="reward" width={35} height={35} objectFit='cover' />
            <h1>Azuki</h1>
           </div>
            <div className='flex flex-col text-start text-white items-end h-full justify-end'>
                <h1 className='text-md font-bold'>
                Bouny Reward
            </h1>
            <p className='text-3xl '>
            $20,000
            </p>
            </div>
            <button className='rounded-full bg-transparent absolute right-0 top-0 '>
          <Image src="/right-arrow.svg" alt="reward" width={50} height={ 50}  className=''/>
        </button>
        </div>
       
    </div>
  )
}

export default rewardCards