"use client";
import React, { useState } from "react";
import Image from "next/image";
import { formatAddress } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isConnected, address } = useAccount();
  const pathName = usePathname();
  const path = pathName.split("/")[1];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className='top-0 left-0 z-[99] fixed w-full backdrop-blur-2xl'>
      <div className='flex items-center justify-between md:px-8 px-4 pt-6 pb-[18px] border-b border-[#27272A]'>
        <div className='flex items-center gap-4'>
          <Image
            src='/icons/logo.svg'
            alt='logo'
            width={48}
            height={48}
          />
          <h1 className='font-semibold text-lg text-white'>SmartAudit Dapp</h1>
        </div>
        <button onClick={toggleMobileMenu}>
          <Image
            src='/icons/menu.png'
            alt='menu'
            width={48}
            height={48}
            className='lg:hidden block'
          />
        </button>
        <div className='lg:flex items-center gap-4 hidden '>
          {isConnected ? (
            <>
              <button
                type='button'
                className='flex gap-2 px-[22px] py-[11px] border border-[#3F3F46] rounded-[100px]'
              >
                <h1 className='font-[500] text-[#fff] text-[16px]'>
                  {formatAddress(address as string)}
                </h1>
              </button>
              <button
                type='button'
                className='flex gap-2 px-[22px] py-[11px] border border-[#F44336] rounded-[100px]'
              >
                <Image
                  src='/icons/disconnect.svg'
                  alt='setting'
                  width={24}
                  height={24}
                />
                <h1 className='font-[500] text-[#F44336] text-[16px] '>
                  Disconnect
                </h1>
              </button>
            </>
          ) : (
            <div
              className='items-center rounded-[24px] text-white'
              style={{
                background:
                  "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
              }}
            >
              <ConnectButton />
            </div>
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className=' z-10 sticky top-0 left-0 w-full backdrop-blur-sm bg-transparent bg-blur bg-slate-600 h-screen'>
          <div className='flex flex-col items-center gap-4'>
            {isConnected ? (
              <div className='flex items-center flex-col gap-4'>
                <button
                  type='button'
                  className='flex gap-2 px-[22px] py-[11px] border border-[#3F3F46] rounded-[100px]'
                >
                  <h1 className='font-[500] text-[#fff] text-[16px]'>
                    {formatAddress(address as string)}
                  </h1>
                </button>
                <button
                  type='button'
                  className='flex gap-2 px-[22px] py-[11px] border border-[#F44336] rounded-[100px]'
                >
                  <Image
                    src='/icons/disconnect.svg'
                    alt='setting'
                    width={24}
                    height={24}
                  />
                  <h1 className='font-[500] text-[#F44336] text-[16px] '>
                    Disconnect
                  </h1>
                </button>
              </div>
            ) : (
              <div
                className='items-center rounded-[24px] text-white'
                style={{
                  background:
                    "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
                }}
              >
                <ConnectButton />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
