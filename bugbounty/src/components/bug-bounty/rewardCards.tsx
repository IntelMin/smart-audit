"use client";
import { formatNumber, formatString } from "@/utils/utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RewardCards() {
  const [cards, setCards] = React.useState<any[]>([]);
  React.useEffect(() => {
    async function getBounties() {

    let res = await axios.get(`/api/bounty/filter?limit=46`);
    let cards = await res.data?.bounties;
    setCards(cards);
    }
    getBounties()
  }, []
    )
  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-4 mt-4">
      {cards?.map((item: any, i: number) => {
        return (
          <div key={i}>
            <div className="relative flex justify-between items-center border-white bg-[url(/inside-curve.svg)] px-4 py-4 rounded-2xl rounded-r-4 w-[279px] h-[142px] object-cover">
              <div className="flex flex-col justify-start items-start space-y-2 h-full">
                <div className="flex justify-center items-center h-[40px]">
                  <Image
                    src={item?.logo || "/default.png"}
                    alt="reward"
                    blurDataURL="L6E.FODh00_403tS%0r;00?Hb_D$"
                    placeholder="blur"
                    width={35}
                    height={35}
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h1>{formatString(item?.name)}</h1>
              </div>
              <div className="flex flex-col justify-end items-end h-full text-start text-white">
                <h1 className="font-bold text-md">Bouny Reward</h1>
                <p className="text-3xl ">${formatNumber(item?.max_reward)}</p>
              </div>
              <Link
                href={item?.link}
                className="top-0 right-0 absolute bg-transparent rounded-full "
              >
                <Image
                  src="/right-arrow.svg"
                  alt="reward"
                  width={50}
                  placeholder="blur"
                  blurDataURL="L6E.FODh00_403tS%0r;00?Hb_D$"
                  height={50}
                  className=""
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RewardCards;
