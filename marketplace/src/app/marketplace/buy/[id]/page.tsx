"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import tempImage from './cute_dev.jpg'
import faTwitter from '@/../../public/icons/lock.png';
import blurImage from '@/../../public/icons/blur-back.png'

import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import { parseEther } from 'viem' 

const isReadOnly = true

type ownedcontracts = {
  id: number,
  name: string,
  price: string,
  contract: string,
  description: string,
  code_hash: string,
  code: string,
  address: string,
  user_id: number,

}

type listedcontracts = {
  id: number,
  name: string,
  contract_id: number,
  user_id: number
}

export type UserData = {
  id: number,
  address: string,
  listedcontracts: listedcontracts[]
  ownedcontracts: ownedcontracts[]
};

const BuyContract = () => {
  const buyDataString = localStorage.getItem('buyData');
  const BuyData = buyDataString ? JSON.parse(buyDataString) : '';
  const editorRef = useRef<any>(null);
  
  const [flag, setFlag] = useState<Boolean>(false)
  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: '0x7aB23cdC966c744D33c86bA36f387AE2ac116178',
    value: parseEther('0.01'),
    onSuccess(data) {
      console.log('Success', data)
    },
  })

  const handleDownload = async () => {
    alert('code downloaded!!')
  }
  const handleBuy = async () => {
    sendTransaction();

    const newData = JSON.stringify({
      data: {
        name: 'New Contract1',
        contract_id: BuyData.id,
        user: {
          connect: {
            id: 2 // Assuming you want to connect to the user with id 2
          }
        }
      }
    })

    const res = await fetch('/api/marketplace/buy', {
      method: 'POST',
      body: newData,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      setFlag(true)
    }
  }

  useEffect(() => {

    const walletAddress = 'seconduser'
    const getOwnerContract = async () => {
      try {
        const users = await fetch(`/api/marketplace/buy?search=${walletAddress}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );

        const report_response = await users.json();
        const contractList = report_response.data.ownedcontracts

        const hasMatchingContract = contractList.some((oneRecord: { contract_id: any; }) => oneRecord.contract_id === BuyData.id);

        if (hasMatchingContract) {
          setFlag(true);
        }


        console.log("Users: ", report_response.data);


      } catch (error) {

        console.error("Error: ", error);

      }
    }

    getOwnerContract();

  }, [BuyData.contract, BuyData.id])

  return (
    <div className="bg-[url(/backgrounds/token-result.svg)] bg-cover bg-center pt-[148px]">
      <div className="flex flex-col md:flex-row gap-8 lg:mx-16 mt-8">

        {/* Column 1 */}
        <div className="md:flex-grow bg-[#222226] p-4 text-white text-xl rounded-[24px]">

          <div className="block md:flex-row gap-4 p-6 rounded-lg ">
            <div className="flex items-center md:items-start mb-4 md:mb-4">
              <Image src={tempImage} className="w-8 h-8 rounded-full mr-2" alt="Avatar" />
              <label><h1 className="text-xl md:text-xl font-bold">{BuyData.name ? BuyData.name : 'ERC20 Token'}</h1></label>
            </div>
            <label><p className="flex-grow whitespace-normal text-base md:text-lg leading-tight md:leading-normal md:mt-0 text-xl">
              {BuyData.description ? BuyData.description : 'ERC20 token with the following features: - Token owners can vote on Governance/DAO proposals. - Premint your total supply. - No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting.'}</p></label>
            <div className="mt-3">
              <label className="py-2 px-4 md:py-1 md:px-2 rounded-full bg-white bg-opacity-20 lg:text-lg md:text-lg sm:text-sm">{BuyData.contract ? BuyData.contract : 'ERC20'}</label>
            </div>
          </div>

          <div className="px-6">
            <div className="text-white text-xl rounded-[24px] ">
              {
                !flag && (<div className="justify-center items-center">
                  <div className={`relative bg-cover bg-center rounded-b-[24px] `}>
                    <Image src={blurImage} alt="lock" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex md:w-[150px] md:h-[150px] bg-[#FFFFFF] bg-opacity-10 rounded-[8px]" onMouseDown={handleBuy}>
                        <div className="w-full flex justify-center items-center cursor-pointer">
                          <div>
                            <Image src={faTwitter} alt="lock" className="m-auto w-[40px] h-[40px]" /> 
                            <div className="text-[14px]">Buy to unlock</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
              }

            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:w-2/5 max-w-[650px] min-w-[300px]">
          <div className="bl bg-[#18181B] rounded-[24px] w-full text-center text-xl text-white p-6">
            <div className="gap-4 md:gap-8">
              <div className="flex items-center justify-between mb-4">
                <p className="md:text-[24px] md:text-left">Price</p>
                <div className="flex-grow">
                  <p className="text-center"></p>
                </div>
                <p className="md:text-[24px] md:text-right">{BuyData.price ? BuyData.price : '30' + 'USDT'}</p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="md:text-[24px] md:text-left">Publish</label>
                <div className="flex-grow">
                  <p className="text-center"></p>
                </div>
                <p className="md:text-[24px] md:text-right">{BuyData.date ? BuyData.date : '22 Feb, 24'}</p>
              </div>
            </div>

            <div className="h-full ">
              {
                flag ? (
                  <button className="flex w-full pt-2 pb-2 items-center rounded-[24px] text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500"  onMouseDown={handleDownload}>
                    <label className="flex-grow md:text-[24px]">Download</label>
                  </button>
                ) 
                :
                (
                  <button className="flex w-full pt-2 pb-2 items-center rounded-[24px] text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500"  onMouseDown={handleBuy}>
                    <span className="flex-grow md:text-[24px]">{ isLoading ? "Loading..." : "Buy" }</span>
                  </button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default BuyContract;