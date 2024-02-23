import React from 'react'

export default function statscomp({scanData}:any) {
    const statsData = [
        {
            title: "Community Trust",
            value: "96.58"
        },
        {
            title: "Volume (24h)",
            value: "$419,628"
        },
        {
            title: "Supply",
            value: "10M"
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
