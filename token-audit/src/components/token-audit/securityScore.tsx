import React from "react";
import { Progress } from "@/components/ui/progress";
import { MoonLoader } from "react-spinners";
import Image from "next/image";
import { url } from "inspector";

function securityScore({ scanData }: any) {
  if (!scanData)
    return (
      <div className=' flex justify-center items-center h-full space-y-8 bg-[#18181B] py-4 px-4 rounded-lg text-white '>
        <Image
          src='/loadingAnimation.gif'
          width={100}
          height={100}
          alt=''
        />
      </div>
    );
  const onboardedDate = new Date(scanData.updatedAt ?? "");
  // const onboardedDate = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" } as const;
  const formattedDate = onboardedDate.toLocaleDateString("en-US", options);
  const statsData = [
    { Audits: 1 },
    { "Onboarded Date": formattedDate },
    { "Market Stability": scanData.marketScore }, //96.22
    { "Code Security": scanData.securityScore }, //99.38
  ];
  const auditData = [{ url: "/icons/tokenaudit/progress.svg", Value: 98 }];
  return (
    <div className='flex flex-col space-y-8 bg-[#18181B] py-4 px-4 rounded-lg text-white '>
      <header className='border-b-white'>
        <h1>Security Score</h1>
      </header>
      <div className='relative '>
        {/* <Progress  value={scanData.auditScore??0} className='h-[100px] '/> */}
        {/* <div className={` `}>
          <Image
            src='/icons/tokenaudit/vprogress.svg'
            alt=''
            width={scanData.auditScore ?? 0}
            height={500}
            className={`object-cover w-full md:w-[${scanData.auditScore}vw]`}
          />
        </div> */}

        <div className='max-w-[1280px] mx-auto'>
          <div
            className={`w-[${scanData.auditScore}px]   rounded-3xl relative progress overflow-hidden mt-8`}
          >
            <div
              className='h-[140px] progress-bar bg-gradient-to-r from-[#11a2ed] to-[#8e35ea] progress-bar-striped  absolute left-0 top-0 transition-all'
              style={{ width: `${scanData.auditScore ?? 0}%` }}
            ></div>
            <div
              className='h-[140px] w-full absolute  bg-gradient-to-r from-[#11a2ed] to-[#8e35ea] opacity-80 '
              style={{ width: `${scanData.auditScore ?? 0}%` }}
            ></div>
          </div>
        </div>

        <p className='absolute text-white p-3 right-2 flex flex-col text-center top-2'>
          <p className='font-bold text-xl'>
            {(scanData.auditScore ?? 0).toFixed(2) ?? 0}%
          </p>
          <p>Audit Score</p>
        </p>
      </div>
      <div className='space-y-10'>
        {statsData.map((data, index) => (
          <div
            key={index}
            className='flex rounded-md justify-between text-start  w-full '
          >
            <p className='font-[500] text-[14px] text-[#A3A3A3] w-full '>
              {Object.keys(data)}
            </p>
            <p className='text-[14px] text-[#E5E5E5] font-bold w-full text-end'>
              {Object.values(data)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default securityScore;
