import Image from 'next/image'
import React from 'react'
import SocialIcons from './socialIcons'

function ContractCard() {
  return (
    <div className="bg-[#18181B] p-6 rounded-[24px]">
    <div className="flex flex-col items-center gap-4 text-center space-y-6 h-full">
      <Image alt="logo" src="/icons/logo.svg" width={80} height={80} />
      <div className="flex flex-col text-center">
        <h1 className="font-[700] text-[28px] text-white leading-[36px]">
          SmartAudit AI
        </h1>
        <h3 className="font-[500] text-[#737373] text-[16px]">
          $AUDIT
        </h3>
      </div>
      <p className="font-[500] text-[#A1A1AA] text-sm">
        SmartAudit AI: AI-powered smart contract security. Proactive
        audits, bug bounties, and real-time monitoring.{" "}
      </p>
      <SocialIcons />
      <div className="flex flex-col flex-end h-full justify-end w-full space-y-2 ">
        <label className="font-[500] text-[16px] text-white flex justify-between px-3">
          Contract Address
          <Image
            alt="logo"
            src="/icons/tokenaudit/eth.svg"
            width={24}
            height={24}
          />
        </label>
        <input
          type="text"
          placeholder="Enter contract Address"
          className="bg-[#FFFFFF14] px-4 py-[10px] rounded-[24px] w-full font-[500] text-[16px] text-white placeholder:text-[#D1D5DB] outline-none"
        />
      </div>
    </div>
  </div>
  )
}

export default ContractCard