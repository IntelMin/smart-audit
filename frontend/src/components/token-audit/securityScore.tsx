import React from 'react'
import { Progress } from "@/components/ui/progress"


function securityScore() {
    const statsData = [
        {"Audits": 1},
        {"Onboarded Date": "Feb-19-2024"},
        {"Market Stability": 96.22},
        {"Code Security": 99.38}
    ];

  return (
    <div className='  flex flex-col space-y-8 bg-[#18181B] py-4 px-4 rounded-lg text-white ' >
        <header className='border-b-white'>
            <h1>Security Score</h1>
        </header>
        <div className='relative '>
        <Progress value={33} className='h-[100px] '/>
        <p className='absolute text-white p-3 right-2 flex flex-col text-center top-2' >
            <p className='font-bold text-xl'>98%</p>
            <p>Audit Score</p>
        </p>
        </div>
        <div className='space-y-10'>
            {statsData.map((data, index) => (
                <div key={index} className="flex rounded-md justify-between text-start  w-full ">
                    <p className="font-[500] text-[14px] text-[#A3A3A3] w-full ">{Object.keys(data)}</p>
                    <p className="text-[14px] text-[#E5E5E5] font-bold w-full text-end">{Object.values(data)}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default securityScore