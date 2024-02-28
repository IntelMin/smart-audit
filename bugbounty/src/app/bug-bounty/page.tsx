import React from 'react'
import RewardCards from "../../components/bug-bounty/rewardCards"
export default function CodeAudit() {
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return (
      <main className="relative flex flex-col justify-start items-center space-y-10 bg-[url(/backgrounds/token.svg)] bg-cover bg-center pt-[156px] min-h-screen text-white ">
        <div className='flex flex-col justify-center space-y-5 w-full text-center'>
        <h1 className='font-bold text-2xl'>Bug Bounty</h1>
        <p className='text-center text-sm'>Aggregate millions of bounties, including private ones, to incentivize the discovery and <br/> resolution of bugs</p>
        </div>
        <div className='gap-6 grid grid-cols-4 mt-4'>
          {
            arr.map((item, i)=>{
              return <RewardCards key={i}/>
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
  