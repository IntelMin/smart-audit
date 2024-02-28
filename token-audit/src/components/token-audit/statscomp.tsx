import { formatNumber } from '@/utils/utils';
import Image from 'next/image';
import React from 'react'
import { MoonLoader } from 'react-spinners';
import { formatUnits } from 'viem';

export default function statscomp({scanData,tokenData}:any) {
if(!scanData || !tokenData) return (

<div className='flex justify-center items-center space-x-4  h-[162px] '>
    <Image src="/loadingAnimation.gif" width={100} height={100} alt=""/>
</div>
)
    const statsData = [
        {
            title: "Community Trust",
            value: scanData?.communityScore,
            // value: 96.58,
            imgUrl:"/icons/people.png"
        },
        {
            title: "Volume (24h)",
            value: "$"+(Number((scanData.tradingVolume??0).toFixed(0))).toLocaleString("en-US"),
            // value: "$419,628",
            imgUrl:"/icons/moneys.png"
        },
        {
            title: "Supply",
            value: formatNumber(Number(formatUnits(tokenData.total_supply??"",Number(tokenData.decimals)))),
            // value: formatNumber(1000000),
            imgUrl:"/icons/convert-card.png"
        },
    ];
  return (
    // <div className='flex space-x-4 lg:flex-row flex-col gap-4 md:h-[162px] md:overflow-auto overflow-x-scroll w-[88vw] md:w-auto '>
    //     {statsData.map((data, index) => (
    //         <div key={index} className="flex flex-col rounded-md justify-between text-start bg-[#18181B]  md:w-full p-4 relative ">
    //             <p className="font-[500] text-[18px] text-white w-full">{data.title}</p>
    //             <p className="text-[32px] text-white font-bold ">{data.value}</p>
    //             <Image src={data.imgUrl} alt={data.title} width={80} height={80}  className='absolute right-0 bottom-0'/>
    //         </div>

    //     ))}
    // </div>
    <div className='flex flex-row  lg:space-x-4 md:space-x-0 gap-4 md:h-[162px]  overflow-x-scroll w-[88vw] md:w-auto'>
      {statsData.map((data, index) => (
        <div
          key={index}
          className='flex flex-col rounded-md justify-between text-start bg-[#18181B] w-[calc(50%-8px)] md:w-full p-4 relative mb-4 lg:mb-0'
        >
          <p className='font-[500] text-[18px] text-white'>{data.title}</p>
          <p className='text-[32px] text-white font-bold'>{data.value}</p>
          <Image
            src={data.imgUrl}
            alt={data.title}
            width={80}
            height={80}
            className='absolute right-0 bottom-0'
          />
        </div>
      ))}
    </div>
  );
}
