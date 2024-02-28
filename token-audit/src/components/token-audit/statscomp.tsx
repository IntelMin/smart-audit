import { formatNumber } from '@/utils/utils';
<<<<<<< HEAD
=======
import Image from 'next/image';
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
import React from 'react'
import { MoonLoader } from 'react-spinners';
import { formatUnits } from 'viem';

export default function statscomp({scanData,tokenData}:any) {
if(!scanData || !tokenData) return (

<div className='flex justify-center items-center space-x-4  h-[162px] '>
<<<<<<< HEAD
    <MoonLoader color='white' />
=======
    <Image src="/loadingAnimation.gif" width={100} height={100} alt=""/>
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
</div>
)
    const statsData = [
        {
            title: "Community Trust",
<<<<<<< HEAD
            value: scanData?.communityScore
        },
        {
            title: "Volume (24h)",
            value: "$"+(Number((scanData.tradingVolume??0).toFixed(0))).toLocaleString("en-US")
        },
        {
            title: "Supply",
            value: formatNumber(Number(formatUnits(tokenData.total_supply??"",Number(tokenData.decimals))))
        },
    ];
  return (
    <div className='flex space-x-4  h-[162px] '>
        {statsData.map((data, index) => (
            <div key={index} className="flex flex-col rounded-md justify-between text-start bg-[#18181B]  w-full p-4">
                <p className="font-[500] text-[18px] text-white w-full">{data.title}</p>
                <p className="text-[32px] text-white font-bold ">{data.value}</p>
            </div>
=======
            value: scanData?.communityScore,
            imgUrl:"/icons/people.png"
        },
        {
            title: "Volume (24h)",
            value: "$"+(Number((scanData.tradingVolume??0).toFixed(0))).toLocaleString("en-US"),
            imgUrl:"/icons/moneys.png"
        },
        {
            title: "Supply",
            value: formatNumber(Number(formatUnits(tokenData.total_supply??"",Number(tokenData.decimals)))),
            imgUrl:"/icons/convert-card.png"
        },
    ];
  return (
    <div className='flex space-x-4  md:h-[162px] md:overflow-auto overflow-x-scroll w-[88vw] md:w-auto '>
        {statsData.map((data, index) => (
            <div key={index} className="flex flex-col rounded-md justify-between text-start bg-[#18181B]  md:w-full p-4 relative ">
                <p className="font-[500] text-[18px] text-white w-full">{data.title}</p>
                <p className="text-[32px] text-white font-bold ">{data.value}</p>
                <Image src={data.imgUrl} alt={data.title} width={80} height={80}  className='absolute right-0 bottom-0'/>
            </div>
            
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
        ))}
    </div>
  )
}
