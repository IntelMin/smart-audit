import React from 'react'
import { Progress } from "@/components/ui/progress"
import { MoonLoader } from "react-spinners";
<<<<<<< HEAD
=======
import Image from 'next/image';
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d

function securityScore({scanData}:any) {
    if(!scanData) return (
        <div className=' flex justify-center items-center h-full space-y-8 bg-[#18181B] py-4 px-4 rounded-lg text-white '>

<<<<<<< HEAD
            <MoonLoader color='white' />
=======
        <Image src="/loadingAnimation.gif" width={100} height={100} alt=""/>
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d

        </div>
    )
    const onboardedDate = new Date(scanData.updatedAt??""); 
    const options = { year: 'numeric', month: 'short', day: 'numeric' } as const;
    const formattedDate = onboardedDate.toLocaleDateString('en-US', options);
    const statsData = [
        {"Audits": 1},
        {"Onboarded Date": formattedDate},
        {"Market Stability": scanData.marketScore},
        {"Code Security": scanData.securityScore}
    ];

  return (
<<<<<<< HEAD
    <div className='  flex flex-col space-y-8 bg-[#18181B] py-4 px-4 rounded-lg text-white ' >
=======
    <div className='flex flex-col space-y-8 bg-[#18181B] py-4 px-4 rounded-lg text-white ' >
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
        <header className='border-b-white'>
            <h1>Security Score</h1>
        </header>
        <div className='relative '>
        <Progress value={scanData.auditScore??0} className='h-[100px] '/>
        <p className='absolute text-white p-3 right-2 flex flex-col text-center top-2' >
            <p className='font-bold text-xl'>{(scanData.auditScore??0).toFixed(2)??0}%</p>
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