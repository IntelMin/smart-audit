"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Coin from "../../../../components/ui/coin";
import GridLoader from "react-spinners/GridLoader";
import CodeEditor from "../../../../components/codeEditor";
import tempImage from "./cute_dev.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faTwitter from "@/../../public/icons/lock.png";
import { json } from "stream/consumers";
import { useSendTransaction,useWaitForTransaction } from "wagmi";

type Props = {
  params: {
    id: string;
  };
};

const isReadOnly = true;
const sourceCode = ``;

export type SellData = {
  key: number;
  name: string;
  price: number;
  contract: string;
  description: string;
  contents: string;
};

const BuyContract = ({ params }: Props) => {
  const [txhash, setTxhash] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const buyDataString = localStorage.getItem("buyData");
  const BuyData = buyDataString ? JSON.parse(buyDataString) : "";

  const contractList = [
    "ERC20",
    "ERC21",
    "ERC404",
    "ERC721",
    "IERC20",
    "ERC165",
    "Token",
    "NFT",
  ];
  const { data: txn, sendTransaction: buy } = useSendTransaction({
    onSuccess: async (txn) => {
      const newTxhash = txn?.hash;
      setTxhash(newTxhash);
      setSubmitting(true);
      console.log(status);
    },
  });
  const {status} = useWaitForTransaction({hash:txhash as `0x${string}`})
  useEffect(()=>{
    if(!submitting) return
    if (status === 'loading' || status === 'idle' || txhash === '0x') {
      return;
    }
    const handleBuy = async () => {
      const param = JSON.stringify({
        data: {
          contract: BuyData.contract,
        },
      });
  
      const res = await fetch("/api/marketplace/buy", {
        method: "POST",
        body: param,
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    if (submitting && status === 'success') {
      console.log('success');

      handleBuy();

    }
    

  },[submitting])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetch("/api/marketplace/buy", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const report_response = await users.json();
        console.log("Users: ", report_response.data);
        return report_response.data;
      } catch (error: any) {
        console.error("Error: ", error.message);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="bg-[url(/backgrounds/token-result.svg)] bg-cover bg-center pt-[148px] min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 lg:mx-16 mt-8">
        {/* Column 1 */}
        <div className="md:flex-grow bg-[#222226] p-4 text-white text-xl rounded-[24px]">
          <div className="block md:flex-row gap-4 p-6 rounded-lg overflow-hidden">
            <div className="flex items-center md:items-start mb-4 md:mb-4">
              <Image
                src={tempImage}
                className="w-8 h-8 rounded-full mr-2"
                alt="Avatar"
              />
              <h1 className="text-xl md:text-xl font-bold">
                {BuyData.name ? BuyData.name : "ERC20 Token"}
              </h1>
            </div>
            <p className="flex-grow whitespace-normal text-base md:text-lg leading-tight md:leading-normal md:mt-0 text-xl">
              {BuyData.description
                ? BuyData.description
                : "ERC20 token with the following features: - Token owners can vote on Governance/DAO proposals. - Premint your total supply. - No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting."}
            </p>
            <div className="mt-3">
              <span className="py-2 px-4 md:py-1 md:px-2 rounded-full bg-white bg-opacity-20 lg:text-lg md:text-lg sm:text-sm">
                {BuyData.contract ? BuyData.contract : "ERC20"}
              </span>
            </div>
          </div>

          <div className="px-6 h-full">
            <div className="relative h-full text-white text-xl rounded-[24px] overflow-hidden flex flex-grow  justify-center">
              <div className="flex flex-grow h-full">
                <CodeEditor source={BuyData.code ? BuyData.code : ""} />
              </div>

              <div className="absolute flex w-full h-[calc(85%)] pt-[calc(15%)] justify-center items-center">
                <div className="bg-[#FFFFFF] bg-opacity-20 w-full h-full rounded-b-[24px]"></div>
                <div className="absolute flex w-[130px] h-[168px] justify-center items-center bg-[#FFFFFF] bg-opacity-10 rounded-[8px]">
                  <div
                    className="block m-auto text-center items-center justify-center flex"
                    onMouseDown={  ()=>  buy({ value: params.value, to: params.to })}
                  
                  >
                    <div className="block w-full ">
                      <Image
                        src={faTwitter}
                        alt="lock"
                        className="block w-[24px] h-[24px] "
                      />
                    </div>
                    <div className="block">
                      <p className="block text-white text-center text-[16px]">
                        {"Buy"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/3 max-w-[650px] min-w-[300px]">
          <div className="bl bg-[#18181B] rounded-[24px] w-full text-center text-xl text-white p-6">
            <div className="gap-4 md:gap-8">
              <div className="flex items-center justify-between mb-4">
                <p className="md:text-[24px] md:text-left">Price</p>
                <div className="flex-grow">
                  <p className="text-center">-</p>
                </div>
                <p className="md:text-[24px] md:text-right">
                  {BuyData.price ? BuyData.price : "30" + "USDT"}
                </p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <p className="md:text-[24px] md:text-left">Publish</p>
                <div className="flex-grow">
                  <p className="text-center">-</p>
                </div>
                <p className="md:text-[24px] md:text-right">
                  {BuyData.date ? BuyData.date : "22 Feb, 24"}
                </p>
              </div>
            </div>

            <div className="h-full">
              <div
                className="flex items-center rounded-[24px] text-center"
                style={{
                  background:
                    "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
                }}
                onMouseDown={handleBuy}
              >
                <p className="flex-grow md:text-[24px]">Buy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyContract;
