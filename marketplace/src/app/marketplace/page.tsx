"use client";

import ContractCard from "../../components/ui/contract-card";
import Coin from "../../components/ui/coin";
import { useEffect, useState } from "react";
import { Contact } from "lucide-react";

interface contracts {
  id:number,
  name: string,
  price: string,
  contract: string,
  description: string,
  code: string,
  address:string
}

export default function Marketplace() {

  const [contractData, setContractData] =  useState<contracts[]>([])

  useEffect(() => {

    const getContracts = async () => {
  
      const res = await fetch('/api/marketplace/request', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
     
      const report_response = await res.json();
      setContractData(report_response.data)
    };
  
    getContracts()
  
  },[])


  return (

    <main className="relative flex items-center justify-center bg-[url(/backgrounds/token.svg)] bg-cover bg-center min-h-screen px-12">
      {/* <div className="block">MarketPlace</div> */}
      <div className="block justify-center md:justify-left items-center opacity-2 rounded-xl p-8 pt-36  custom-scrollbar bg-[url(/backgrounds/token.svg)] bg-cover bg-center " style={{ "backgroundColor": "#151516" }}>

        <div className="md:flex md:flex-row sm:flex-col w-full h-full text-white">
    
          <div className="md:w-3/4 sm:w-full border-r border-solid border-gray-700 pt-8 m-4">
            <div className="text-2xl"><b>Categories</b></div>
            <div className="flex flex-wrap gap-6 mt-7 pr-12">
              <Coin name="ERC20" />
              <Coin name="ERC21" />
              <Coin name="ERC404" />
              <Coin name="ERC721" />
              <Coin name="IERC20" />
              <Coin name="ERC165" />
              <Coin name="Token" />
              <Coin name="NFT" />
              {/* {contractList.map((one) => (
                <Coin key={one} name={one} />
              ))} */}
            </div>
            <div className="flex  justify-between pt-8 pr-12">
              <input className="pl-5 h-11 w-full md:w-4/5 rounded-full text-indent-16 mt-3 md:mt-0" style={{ "backgroundColor": "#29292c", "outline": "none" }} type="text" placeholder="Search between smart contracts" />
              <button type="button" className="w-1/6 py-10rem px-4.75rem rounded-full fon-size-16 text-white " style={{ background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)" }}>
                <a href="/marketplace/sell" className="w-full h-full flex items-center justify-center md:text-[18px] sm:text-[14px]">Search</a>
              </button>
            </div>
          </div>

          <div className="md:w-1/4 sm:w-full pl-12 pt-8 m-4">
            <div className="text-2xl"><b>Sell your smart contracts</b></div>
            <p className="font-size-16 mt-3">Sign up today and begin selling your smart contract source codes.</p>
            <button className="w-full h-11 rounded-full fon-size-16 mt-9" type="button" style={{ background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)" }}>
              <a href="/marketplace/sell" className="bold h-full flex items-center justify-center md:text-[18px] md:text-[18px] sm:text-[14px]">Sell Contract</a>
            </button>
          </div>
        </div>

        {/* Contract grid area */}
        <div className="flex flex-wrap items-center w-full mt-12">
          {/* <ContractCard title="ERC20Token" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="Time-Locked Wallet" description="Gas efficient time locked wallet vaults. Stores the tokens and releases them at a later date to the recipients." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="Infinite Auction" description="This smart contract is an extension of the ERC721 standard. It allows users to purchase and mint NFTs, with a maximum supply and wallet limit. The owner can reserve NFTs, withdraw proceeds, and control the sale's activity, price, and wallet limit. It also enables the owner to update the base URI for NFT metadata." standard="ERC721" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="AggregationRouterV5" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="ERC721" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC721" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="ERC20Token" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="Time-Locked Wallet" description="Gas efficient time locked wallet vaults. Stores the tokens and releases them at a later date to the recipients." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="Infinite Auction" description="This smart contract is an extension of the ERC721 standard. It allows users to purchase and mint NFTs, with a maximum supply and wallet limit. The owner can reserve NFTs, withdraw proceeds, and control the sale's activity, price, and wallet limit. It also enables the owner to update the base URI for NFT metadata." standard="ERC721" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="AggregationRouterV5" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg" />
          <ContractCard title="ERC721" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC721" avatar="./preview-avatar/cute_dev.jpg" /> */}

          {contractData && contractData.map((contract) => (
            <ContractCard title={contract.name} key={contract.id} {...contract} />
          ))}
        </div>
      </div>
    </main>
  );

}
