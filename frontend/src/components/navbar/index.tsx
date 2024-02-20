"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useAccount } from "wagmi";

type Props = {};

const navEle = [
  {
    name: "Token Audit",
    href: "/token-audit",
    icon: "/icons/coin-active.svg", //!TODO Change the icon
    activeIcon: "/icons/coin-active.svg",
  },
  {
    name: "Code Audit",
    href: "/code-audit",
    icon: "/icons/code.svg",
    activeIcon: "/icons/code.svg", //!TODO Change the icon
  },
];

export const Navbar = (props: Props) => {
  const { isConnected } = useAccount();
  const pathName = usePathname();
  const path = pathName.split("/")[1];
  const isActive = (ele: string) => ele.substring(1) === path;
  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="px-8 pt-6 pb-[18px] flex items-center justify-between border-b border-[#27272A]">
        <div className="flex items-center gap-4">
          <Image src="/icons/logo.svg" alt="logo" width={48} height={48} />
          <h1 className="text-white font-semibold text-lg">SmartAudit Dapp</h1>
        </div>
        {isConnected ? (
          <button type="button">Disconnect</button>
        ) : (
          <div
            className="flex items-center rounded-[24px]"
            style={{
              background:
                "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
            }}
          >
            <ConnectButton />
          </div>
        )}
      </div>
      <div className="pt-[18px] border-b border-[#272727] flex items-center pl-6 gap-12">
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
      </div>
    </nav>
  );
};
