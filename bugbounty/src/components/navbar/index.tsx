"use client";

import { formatAddress } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useAccount } from "wagmi";
import { navEle } from "./constant";

type Props = {};

export const Navbar = (props: Props) => {
  const { isConnected, address } = useAccount();
  const pathName = usePathname();
  const path = pathName.split("/")[1];
  const isActive = (ele: string) => ele.substring(1) === path;
  return (
    <header className="top-0 left-0 z-[99] fixed backdrop-blur-2xl w-full">
      <div className="flex justify-between items-center border-[#27272A] px-4 md:px-8 pt-6 pb-[18px] border-b">
        <div className="flex items-center gap-4">
          <Image src="/icons/logo.svg" alt="logo" width={48} height={48} />
          <h1 className="font-semibold text-lg text-white">SmartAudit Dapp</h1>
        </div>
        {isConnected ? (
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex gap-2 border-[#3F3F46] px-[22px] py-[11px] border rounded-[100px]"
            >
              <h1 className="font-[500] text-[#fff] text-[16px]">
                {formatAddress(address as string)}
              </h1>
            </button>
            <button
              type="button"
              className="flex gap-2 border-[#F44336] px-[22px] py-[11px] border rounded-[100px]"
            >
              <Image
                src="/icons/disconnect.svg"
                alt="setting"
                width={24}
                height={24}
              />
              <h1 className="font-[500] text-[#F44336] text-[16px] ">
                Disconnect
              </h1>
            </button>
          </div>
        ) : (
          <div
            className="flex items-center rounded-[24px] text-white "
            style={{
              background:
                "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
            }}
          >
            <ConnectButton  />
          </div>
        )}
      </div>
      {/* <nav className="flex items-center gap-12 border-[#272727] pt-[18px] pl-6 border-b">
        {navEle?.map((ele, i) => (
          <Link
            href={ele.href}
            key={i}
            className={`flex items-center gap-3 pb-3 ${isActive(ele.href) ? "border-b border-white" : ""} px-2`}
          >
            <Image
              src={isActive(ele.href) ? ele.activeIcon : ele.icon}
              alt={ele.name}
              width={24}
              height={24}
            />
            <h1
              className={`${isActive(ele.href) ? "text-white " : "text-[#52525B]"} font-semibold text-[16px]`}
            >
              {ele.name}
            </h1>
          </Link>
        ))}
      </nav> */}
    </header>
  );
};
