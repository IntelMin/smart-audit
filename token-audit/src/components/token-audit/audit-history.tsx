import React from 'react'
import { Progress } from '../ui/progress'
import Image from 'next/image'

function auditHistory({findings}:any) {
<<<<<<< HEAD
=======
  console.log(findings)
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
  const auditData = [
    {
      "Severity": "High",
      "Value": findings.high,
      "url":"/icons/tokenaudit/progress.svg"
    },
    {
      "Severity": "Medium",
      "Value": findings.med,
      "url":"/icons/tokenaudit/progress1.svg"
    },
    {
      "Severity": "Low",
<<<<<<< HEAD
      "Value": findings.low,
      "url":"/icons/tokenaudit/progress2.svg"
    },
    // {
    //   "Severity": "Info",
    //   "Value": 45,
    //   "url":"/icons/tokenaudit/progress.svg"
    // }
=======
      "Value": findings?.low,
      "url":"/icons/tokenaudit/progress2.svg"
    },
    {
      "Severity": "Info",
      "Value": findings?.info,
      "url":"/icons/tokenaudit/progress.svg"
    }
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
  ];
  
  return (
    <div className='text-white bg-[#18181B] rounded-xl p-4 space-y-5 '>
      <div className='flex w-full justify-between pt-2'>
        <p className='font-semibold'>
          Audit History
        </p>
        {/* <div className='flex flex-col text-end'>
          <p>+500</p>
          <p className='text-sm'>From Last Audit</p>
        </div> */}
        
      </div>
      <div className='flex space-x-10 justify-center items-end'>
        {
          auditData.map((data, index) => (
            <div className='flex flex-col items-center justify-center space-y-2' key={index}>
              <button className='text-white bg-[#FFFFFF1A] rounded-xl  px-3 py-1'>{data.Value}</button>
              <div className={``}>
<<<<<<< HEAD
              <Image src={data.url} alt='progress' width={data.Value??0} height={data.Value??0} className={`object-cover  h-[${data.Value}px]`} />
=======
              <Image src={data.url} alt='progress' width={data.Value===0?0:30} height={data.Value??0} className={`object-cover  h-[${data.Value}px]`} />
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
              </div>
              <h1 className=''>{data.Severity}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default auditHistory;
