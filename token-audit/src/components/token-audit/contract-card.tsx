import Image from "next/image";
import React from "react";
import SocialIcons from "./socialIcons";
import { MoonLoader } from "react-spinners";
import { formatAddress } from "@/lib/utils";
import copy from "copy-to-clipboard";
import { useToast } from "../ui/use-toast";
import Logo from "../../../public/icons/logo.svg";
function ContractCard({ token, scanData, finding }: any) {
  const { toast } = useToast();

  if (!token)
    return (
      <div className='bg-[#18181B] flex justify-center items-center p-6 rounded-[24px]'>
        <Image
          src='/loadingAnimation.gif'
          width={100}
          height={100}
          alt=''
        />
      </div>
    );
  // const address = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

  const copyToClipboard = () => {
    copy(token.address);
    toast({
      title: "Addrress copied to clipboard",
      variant: "default",
    });
  };
  function trimSentences(str: string) {
    if (!str) return "";
    const sentences = str.split(".");
    const firstFiveSentences = sentences.slice(0, 2);
    return firstFiveSentences.join(".") + ".";
  }
  return (

    <div className='bg-[#18181B] h-auto  md:p-6 p-3 rounded-[24px]'>
      <div className='flex flex-col items-center gap-4 text-center space-y-6 h-full'>
        <Image
          alt='logo'
          src={token.icon_url ?? scanData?.logo}
          // src={Logo}
          width={80}
          height={80}
        />
        <div className='flex flex-col text-center'>
          <h1 className='font-[700] lg:text-[24px] text-sm text-white leading-[36px]'>
            {token.name}
            {/* SmartAudit AI */}
          </h1>
          <h3 className='font-[500] text-[#737373] text-[12px]'>
            ${token.symbol}
            {/* $AUDIT */}
          </h3>
        </div>
        <p className='font-[500] text-[#A1A1AA] text-sm'>
          {trimSentences(
            "SmartAudit Al: Al-powered smart contract security.Proactive audits, bug bounties, and real-time monitoring."
          )}{" "}
          {/* finding?.text */}
        </p>
        <SocialIcons />
        <div className='flex flex-col flex-end h-full justify-end w-full space-y-1 relative py-2'>
          <label className='font-medium  py-3 lg:text-[16px] text-[10px] text-white flex justify-between lg:px-3 px-1'>
            Contract Address
            <Image
              alt='logo'
              src={token?.icon_url ?? scanData?.logo}
              // src='/icons/tokenaudit/eth.svg'
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
          <button
            onClick={copyToClipboard}
            className='bg-[#FFFFFF14] px-4 py-[10px] rounded-[24px] flex justify-between w-full font-[500] lg:text-[16px] text-[10px] text-white placeholder:text-[#D1D5DB] outline-none'
          >
            {formatAddress(token.address)}
            <Image
              src='/icons/tokenaudit/document-copy.svg'
              width={20}
              height={20}
              alt='copy'
            />
          </button>
          {/* </input> */}

          {/* <button  className='absolute bottom-3 right-3' onClick={copyToClipboard}>
        <Image src="/icons/tokenaudit/document-copy.svg" width={20} height={20} alt="copy"/>
        </button> */}
        </div>
      </div>
    </div>
  );
}

export default ContractCard;
