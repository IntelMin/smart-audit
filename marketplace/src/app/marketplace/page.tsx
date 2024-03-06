"use client";

import ContractCard from "../../components/ui/contract-card";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useToast } from "../../components/ui/use-toast";
import { useRouter } from 'next/navigation';

interface contracts {
  id: number,
  name: string,
  price: string,
  contract: string,
  description: string,
  code: string,
  address: string
}

export default function Marketplace() {

  const contractList = ["ERC20", "ERC21", "ERC404", "ERC721", "IERC20", "ERC165", "Token", "NFT"]

  const { isConnected, address } = useAccount();
  const [contractData, setContractData] = useState<contracts[]>([])
  const [tempContractData, setTempContractData] = useState<contracts[]>([])
  const [selContract, setSelContract] = useState<string>()
  const { toast } = useToast();
  const { push } = useRouter();

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setTempContractData(report_response.data)
    };

    getContracts()

  }, [])

  const handleSell = () => {
    if (address) push('/marketplace/sell')
    else {
      toast({
        title: "Authentication Error!",
        description: "You must connect to the wallet!",
        variant: "destructive",
      });
    }
  }

  const arraysEqual = (arr1: any[], arr2: any[]): boolean => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };

  const handleContractClick = (index: string) => {

    
    if (index === selContract) {
      setContractData(tempContractData)
      setSelContract('')
    } else {
      const compareData = tempContractData.map(one => one)
      const updatedData = compareData.filter(one => one.contract === index);

      if (!arraysEqual(updatedData, contractData)) {
        setContractData(updatedData);
      }
      setSelContract(index)
    }

  }

  const handleSearchChange = (e: any) => {
    if (e.target.value === '') {

      setContractData(tempContractData)

    } else {

      const updatedData = contractData.filter(one => one.name.toLowerCase().includes(e.target.value.toLowerCase()));

      if (!arraysEqual(updatedData, contractData)) {
        setContractData(updatedData);
      }

    }

  }

  return (

    <main className="relative flex items-center justify-center bg-[url(/backgrounds/token.svg)] bg-cover bg-center min-h-screen px-12">
      {/* <div className="block">MarketPlace</div> */}
      <div className="block justify-center md:justify-left items-center opacity-2 rounded-xl p-8 pt-36  custom-scrollbar bg-[url(/backgrounds/token.svg)] bg-cover bg-center " style={{ "backgroundColor": "#151516" }}>

        <div className="md:flex md:flex-row sm:flex-col w-full h-full text-white">

          <div className="md:w-3/4 sm:w-full border-r border-solid border-gray-700 pt-8 m-4">
            <div className="text-2xl"><b>Categories</b></div>
            <div className="flex flex-wrap gap-6 mt-7 pr-12">
              {contractList && contractList.map((one, index) => (
                <button className={`py-2 px-6 text-white font-size-14 rounded-full md:items-center hover:bg-blue-700 hover:bg-opacity-10 ${one === selContract ? 'bg-blue-700 bg-opacity-10' : 'bg-[#2c2c2e]'} `} onClick={() => { handleContractClick(one) }} key={index}>
                  {one}
                </button>

                //  <Coin key={index} name={one} onClick={() => handleContractClick(contractList[index])}/>
              ))}
            </div>
            <div className="flex  justify-between pt-8 pr-12">
              <input className="pl-5 h-11 w-full md:w-4/5 rounded-full text-indent-16 mt-3 md:mt-0" style={{ "backgroundColor": "#29292c", "outline": "none" }} type="text" placeholder="Search between smart contracts" onChange={handleSearchChange} />
              <button type="button" className="w-1/6 py-10rem px-4.75rem rounded-full fon-size-16 text-white " style={{ background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)" }}>
                <a href="/marketplace/sell" className="w-full h-full flex items-center justify-center md:text-[18px] sm:text-[14px]">Search</a>
              </button>
            </div>
          </div>

          <div className="md:w-1/4 sm:w-full pl-12 pt-8 m-4">
            <div className="text-2xl"><b>Sell your smart contracts</b></div>
            <p className="font-size-16 mt-3">Sign up today and begin selling your smart contract source codes.</p>
            <button className="w-full h-11 rounded-full bold items-center fon-size-16 mt-9 md:text-[18px] md:text-[18px] sm:text-[14px]" type="button" style={{ background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)" }} onClick={() => handleSell()}>
              Sell Contract
            </button>
          </div>
        </div>

        {/* Contract grid area */}
        <div className="flex flex-wrap items-center w-full mt-12">
          {contractData && contractData.map((contract) => (
            <ContractCard title={contract.name} key={contract.id} {...contract} />
          ))}
        </div>
      </div>
    </main>
  );

}
