import Image from 'next/image'
import React from 'react'
import SocialIcons from './socialIcons'
import { MoonLoader } from 'react-spinners'
import { formatAddress } from '@/lib/utils'
import copy from 'copy-to-clipboard';
import { useToast } from '../ui/use-toast'

function ContractCard({token,scanData,finding}:any) {
  const { toast } = useToast();
  if(!token) return (
    <div className="bg-[#18181B] flex justify-center items-center p-6 rounded-[24px]">
      <MoonLoader color='white' />
      </div>
  )
  const copyToClipboard = () => {
    copy(token.address);
    toast({
      title: "Adrress copied to clipboard",
      variant: "default",
    });
  };
  function trimSentences(str:string) {
    if (!str) return '';
    const sentences = str.split('.');
    const firstFiveSentences = sentences.slice(0, 2);
    return firstFiveSentences.join('.') + '.';
  }
  return (
    <div className="bg-[#18181B] p-6 rounded-[24px]">
    <div className="flex flex-col items-center gap-4 text-center space-y-6 h-full">
      <Image alt="logo"     src={token.icon_url??""} width={80} height={80} />
      <div className="flex flex-col text-center">
        <h1 className="font-[700] text-[28px] text-white leading-[36px]">
          {token.name}
        </h1>
        <h3 className="font-[500] text-[#737373] text-[16px]">
          ${token.symbol}
        </h3>
      </div>
      <p className="font-[500] text-[#A1A1AA] text-sm">
        {trimSentences(finding?.text)}{" "}
      </p>
      <SocialIcons 
      scanData={scanData}
      />
      <div className="flex flex-col flex-end h-full justify-end w-full space-y-2 ">
        <label className="font-[500] text-[16px] text-white flex justify-between px-3">
          Contract Address
          <Image
            alt="logo"
            src={token.icon_url??""}
            width={24}
            height={24}
          />
        </label>
        {/* <input
        disabled
          type="text"
          className="bg-[#FFFFFF14] px-4 py-[10px] rounded-[24px] w-full font-[500] text-[16px] text-white placeholder:text-[#D1D5DB] outline-none"
          // value={formatAddress(token.address)}
          
        > */}
          <button onClick={copyToClipboard} className="bg-[#FFFFFF14] px-4 py-[10px] rounded-[24px] w-full font-[500] text-[16px] text-white placeholder:text-[#D1D5DB] outline-none">
            {formatAddress(token.address)}
          </button>
        {/* </input> */}
      </div>
    </div>
  </div>
  )
}

export default ContractCard