"use client";

import { formatAddress } from "@/lib/utils";
import {
  ConnectButton,
  useAccountModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useAccount } from "wagmi";

type Props = {};

export const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const { isConnected, address } = useAccount();

  const { openAccountModal } = useAccountModal();

  const pathName = usePathname();
  const path = pathName.split("/")[1];
  const isActive = (ele: string) => ele.substring(1) === path;
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
            className='md:hidden block'
          />
        </button>
        {isConnected ? (
          <div className='md:flex hidden  items-center gap-4 '>
            <div className='flex flex-row gap-4'>
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
                onClick={openAccountModal}
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
          </div>
        ) : (
          <div
            className='hidden items-center rounded-[24px] text-white md:flex'
            style={{
              background:
                "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
            }}
          >
            <ConnectButton />
          </div>
        )}
      </div>
      <div>
        {isMobileMenuOpen && (
          <div className='md:hidden block  z-10 sticky top-0 left-0 w-full whiteGlassmorphism h-screen backdrop-blur-sm bg-transparent'>
            <div className='flex flex-col items-center gap-4 '>
              {isConnected ? (
                <div className='flex flex-col justify-between h-[80vh]'>
                  <div className='flex items-center flex-col gap-4 mt-10 justify-start '>
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
                      onClick={openAccountModal}
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

                  <div className='text-white justify-end items-center text-center'>
                    <div className='flex flex-col gap-4 px-4'>
                      <div className='flex space-x-1'>
                        <Link
                          href='https://twitter.com/SmartauditAI'
                          rel='noopener noreffer'
                          target='_blank'
                        >
                          <ButtonWithImage
                            src={"/icons/tokenaudit/xBtn.svg"}
                            alt='xBtn'
                            width={240}
                            height={24}
                          />
                        </Link>
                        <Link
                          href='https://t.me/SmartauditAI'
                          rel='noopener noreffer'
                          target='_blank'
                        >
                          <ButtonWithImage
                            src={"/icons/tokenaudit/telegramBtn.svg"}
                            alt='telegramBtn'
                            width={240}
                            height={24}
                          />
                        </Link>
                      </div>
                      <div className=''>
                        <Link
                          href='https://smartauditai.org/'
                          rel='noopener noreffer'
                          target='_blank'
                        >
                          <ButtonWithImage
                            src={"/icons/tokenaudit/privacy.svg"}
                            alt='privacy'
                            width={480}
                            height={48}

                            // className='h-28'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className='items-center rounded-[24px] text-white md:flex'
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
      </div>
    </header>
  );
};

const ButtonWithImage = ({ src, alt, width, height }: any) => {
  return (
    <div className='w-full flex justify-center'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='cursor-pointer  transition-all duration-300 ease-in-out z-[10000]'
        style={{ 
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      color: "rgba(0,0,0,0.25)" }}
      />
    </div>
  );
};
