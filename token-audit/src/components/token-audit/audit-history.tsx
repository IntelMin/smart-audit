"use client";
import React, { use, useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import Image from "next/image";

function AuditHistory({ findings }: any) {
  console.log("audit score", findings);
  const [data, setData] = useState<any>(false);
  useEffect(() => {
    if (findings.high && findings.med && findings.low > 0) {
      setData(true);
    }
  }, []);
  console.log("data", data);
  const auditData = [
    {
      Severity: "High",
      Value: findings.high,
      // Value: 100,
    },
    {
      Severity: "Medium",
      Value: findings.med,
      // Value: 50,
    },
    {
      Severity: "Low",
      Value: findings?.low,
      // Value: 25,
    },
    // {
    //   Severity: "Info",
    //   // Value: findings?.info,
    //   Value: 10,
    // },
  ];

  return (
    <div className='text-white bg-[#18181B] h-auto  md:p-6 p-3 rounded-[24px] '>
      <div className='flex w-full justify-between pt-2'>
        <p className='font-semibold'>Audit History</p>
        {/* <div className='flex flex-col text-end'>
        <p>+500</p>
        <p className='text-sm'>From Last Audit</p>
      </div> */}
      </div>
      <div className='w-full h-[1px] bg-[#2a2a2d] my-2 '></div>
      {data === false ? (
        <div className='flex justify-center items-center min-h-[300px]'>
          <Image
            src='/icons/tokenaudit/no-history.svg'
            width={400}
            height={400}
            alt='No History Found'
          />
        </div>
      ) : (
        <div className='flex space-x-10 justify-center items-end'>
          {auditData.map((data, index) => (
            <div
              className='flex flex-col items-center justify-center space-y-2'
              key={index}
            >
              <button className='text-white bg-[#FFFFFF1A] rounded-xl  px-3 py-1'>
                {data.Value}
              </button>
              <div className={``}>
                <VerticalProgressBar progress={data.Value} />
              </div>
              <h1 className=''>{data.Severity}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AuditHistory;

function VerticalProgressBar({ progress }: any) {
  return (
    <>
      <div className='h-[300px]  w-8 bg-[#18181b] rounded-xl relative progress-vertical overflow-hidden rotate-180'>
        <div
          className='w-full progress-bar bg-gradient-to-t  from-[#11a2ed] to-[#8e35ea] progress-bar-striped absolute  transition-all'
          style={{ height: `${progress ?? 0}%` }}
        ></div>

        <div
          className='w-full  absolute bg-gradient-to-t  from-[#11a2ed] to-[#8e35ea] opacity-85 '
          style={{ height: `${progress ?? 0}%` }}
        ></div>
      </div>
    </>
  );
}
