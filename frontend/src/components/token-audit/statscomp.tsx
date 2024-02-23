import { formatNumber } from '@/utils/utils';
import React from 'react'
import { MoonLoader } from 'react-spinners';
import { formatUnits } from 'viem';

export default function statscomp({scanData,tokenData}:any) {
if(!scanData || !tokenData) return (

<div className='flex justify-center items-center space-x-4  h-[162px] '>
    <MoonLoader color='white' />
</div>
)
    const statsData = [
        {
            title: "Community Trust",
            value: scanData.communityScore
        },
        {
            title: "Volume (24h)",
            value: "$"+(Number(scanData.tradingVolume.toFixed(0))).toLocaleString("en-US")
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
        ))}
    </div>
  )
}
