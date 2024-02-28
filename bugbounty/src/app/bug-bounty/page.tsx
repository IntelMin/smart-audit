import React from 'react'
import RewardCards from "../../components/bug-bounty/rewardCards"
export default function CodeAudit() {
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return (
      <main className="relative flex flex-col items-center  justify-start pt-[156px] space-y-10  bg-[url(/backgrounds/token.svg)] bg-cover bg-center min-h-screen  text-white  ">
        <div className='flex flex-col w-full justify-center space-y-5 text-center'>
        <h1 className='text-2xl font-bold'>Bug Bounty</h1>
        <p className='text-center text-sm'>Aggregate millions of bounties, including private ones, to incentivize the discovery and <br/> resolution of bugs</p>
        </div>
        <div className='grid grid-cols-4 gap-6 mt-4'>
          {
            arr.map((item)=>{
              return <RewardCards/>
            })
          }
        {/* <RewardCards/>
        <RewardCards/>
        <RewardCards/>
        <RewardCards/> */}
        </div>
      </main>
    );
  }
  