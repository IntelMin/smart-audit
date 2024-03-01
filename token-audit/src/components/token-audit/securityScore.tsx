import React from "react";

import Image from "next/image";

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
    // { "Governance Score": scanData.liquidityScore }, // 99.38
    { "Community Score": scanData.communityScore }, // 99.38
    { "Decentralization Score": scanData.decentralisationScore }, // 99.38
    { "Fundamental Score": scanData.fundamentalsScore.toFixed(2) }, // 99.38
  ];
  return (
    <div className='flex flex-col space-y-4 bg-[#18181B] py-4 px-4 rounded-lg text-white '>
      <header className='border-b-white'>
        <h1>Security Score</h1>
      </header>
      <div className='relative'>
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

        <p className='absolute text-white p-3 right-5 md:flex flex-col text-center top-8  hidden'>
          <p className='font-bold text-xl'>
            {(scanData.auditScore ?? 0).toFixed(2) ?? 0}%
          </p>
          <p>Audit Score</p>
        </p>
      </div>

      <div className='space-y-2'>
        <div className='flex md:hidden rounded-md justify-between text-start  w-full '>
          <p className='font-bold text-[18px] text-[#e5e5e5] w-full '>
            {(scanData.auditScore ?? 0).toFixed(2) ?? 0}%
          </p>
          <p className='text-[14px] text-[#E5E5E5] font-bold w-full text-end'>
            Audit Score
          </p>
        </div>
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
