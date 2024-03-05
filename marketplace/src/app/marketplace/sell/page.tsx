'use client';

import React, { useEffect, useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import Editor from '@monaco-editor/react';
import { useAccount } from "wagmi";

export type ContractDataTypes = {
  userId: number;
  price: number;
  title: string;
  description: string;
  id: number;
  user: { id: number }
};

const SellContract = () => {

  const tempList = [
    { title: 'ERC20', id: 1, price: 0, userId: 12, description: '', user: { id: 0 }}, 
    { title: 'ERC21', id: 2, price: 0, userId: 13, description: '', user: { id: 0 } }, 
    { title: 'ERC404', id: 3, price: 0, userId: 14, description: '', user: { id: 0 } }, 
    { title: 'ERC721', id: 4, price: 0, userId: 15, description: '', user: { id: 0 } }, 
    { title: 'IERC20', id: 5, price: 0, userId: 16, description: '', user: { id: 0 } }, 
    { title: 'ERC165', id: 6, price: 0, userId: 17, description: '', user: { id: 0 } }, 
    { title: 'Token', id: 7, price: 0, userId: 18, description: '', user: { id: 0 } }, 
    { title: 'NFT', id: 8, price: 0, userId: 19, description: '', user: { id: 0 } }
  ]

  const [nameData, setNameData] = useState('');
  const [descriptionData, setDescriptionData] = useState('');
  const [codeData, setCodeData] = useState('');
  const [priceData, setPriceData] = useState('');
  const [contractData, setContractData] = useState('');
  const [addressData, setAddressData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [sourceCode, setSourceCode] = useState<string>('');
  const [contractList, setContractList] = useState<ContractDataTypes[]>(tempList)
  const { isConnected, address } = useAccount();
  const isReadOnly = false;

  const { toast } = useToast()
  const editorRef = useRef<any>(null);

  
  useEffect(()=>{
    if(address) setAddressData(address);
  }, [address])

  // const getOwnedContracts = async () => {
  //   try {
  //     const response = await fetch('api/marketplace', { method: 'GET' });
  //     const parse_response = await response.json()
  //     if (parse_response.status === 200) setContractList(parse_response.data);
  //   } catch (error) {
  //     console.error("Getting user error: ", error);
  //   }
  // };

  // getOwnedContracts();

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  const handleConfirm = async () => {

    setShowModal(false)

    const contractparam = JSON.stringify({
      data: {
        userId: 2,                  // user_id
        price: parseInt(priceData, 10),
        title: nameData,
        description: descriptionData,
      }
    });

    const resContract = await fetch('/api/marketplace', {
      method: 'POST',
      body: contractparam,
      headers: {
        'Content-Type': 'application/json',
      },

    });

    console.log('resg4e :' ,resContract)

    if(resContract.status != 200)
    {
      if(resContract.status === 410) toast({ title: "Contract already registered!", variant: "default" });
      else toast({title: "Server Error", variant: "destructive" });
      return;
    }

    const listparam = JSON.stringify({
      data: {
        name: nameData,
        price: priceData,
        contract: contractData,
        description: descriptionData,
        code: codeData,
        code_hash: '',
        address: addressData,
        // user_id
        user: { connect: { id: 2 } }
      }
    })

    const res = await fetch('/api/marketplace/sell', {
      method: 'POST',
      body: listparam,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      toast({
        title: 'Success!'
      });
    }
    
  }

  const handleSave = () => {

    let errorTxt = "";

    if (!descriptionData) errorTxt ="Description Data";
    if (!codeData) errorTxt ="Code Data";
    if (!priceData) errorTxt ="Price Data";
    if (!contractData) errorTxt ="Contract Data";
    if (!addressData) errorTxt ="Wallet";
    if (!nameData) errorTxt ="Name Data";
    
    if(errorTxt){
      toast({ title: 'Validation Error', description: "You must entered " + errorTxt + " value!", variant:"destructive" });
      return;
    }    

    setShowModal(true)
  }

  const onHandleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <div className={`${showModal ? 'flex fixed' : 'hidden'}  w-[100%] items-center justify-center min-h-screen z-10`}>

        <div className=" w-full min-h-screen bg-white bg-opacity-[10%] " />

        <div className="flex absolute justify-center items-center px-8 md:w-2/5 max-w-[570px] min-w-[300px] ">
          <div className="bl bg-[#292929]  rounded-[24px] w-full text-center text-xl text-white p-6">
            <div className="flex w-full justify-end items-end"><p className="text-[12px] font-cursive cursor-pointer" onClick={onHandleCloseModal}>X</p></div>
            <div className="gap-4 md:gap-8">
              <div className="mt-2"><h1 className="font-bold">Confirm Sell Smart Contract</h1></div>
              <div className="mt-2 mb-4">
                <div><label className="md:text-[16px] md:text-left">you are listing a smart contract for sell with following detail.</label></div>
                <div><label className="md:text-[16px] md:text-left">  The payment of sells will send to your wallet directly</label></div>
              </div>

              <div className="flex items-center justify-between mb-4 px-2">
                <p className="md:text-[18px] md:text-left">Price</p>
                <div className="flex-grow">
                  <p className="text-center"></p>
                </div>
                <p className="md:text-[18px] md:text-right">{priceData + 'USDT'}</p>
              </div>

              <div className="flex items-center justify-between mb-6 px-2">
                <label className="md:text-[18px] md:text-left">Contract</label>
                <div className="flex-grow">
                  <p className="text-center"></p>
                </div>
                <p className="md:text-[18px] md:text-right">{contractData}</p>
              </div>

            </div>

            <div className="h-full px-2">
              <button className="flex w-full pt-2 pb-2 items-center rounded-[24px] text-center" style={{
                background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
              }} onMouseDown={handleConfirm}>
                <label className="flex-grow md:text-[18px] font-bold">Confirm</label>
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className="relative items-center justify-center bg-[url(/backgrounds/token-result.svg)] bg-cover bg-center min-h-screen mt-[145px] mx-auto">
        <div>
          <div className="block text-white text-center gap-8 md:w-2/3 lg:w-1/2 mx-auto">
            <p className="text-4xl font-bold">Sell Contracts</p>
            <p className="text-xl mt-3">Sign up today and begin selling your smart contract source codes.</p>
          </div>

          <div className="flex flex-col md:flex-row sm:flex-row gap-8 p-8 min-h-[calc(100vh-148px)] items-center justify-center">
            <div className="rounded-[24px] bg-[#222226] p-8">
              <div className="block gap-8 text-white text-xl flex-grow">
                <div className="flex flex-col flex-grow items-center md:items-left p-6 rounded-lg text-center overflow-hidden">
                  <div className="inline items-center flex-grow">
                    <h1 className="text-2xl font-bold">Sell Your Contract</h1>
                  </div>

                  <p className="flex-grow whitespace-normal text-base leading-tight mt-3">
                    Enter your contract details such as price, name, description, and paste contract code.
                  </p>

                  <div className="flex flex-col md:flex-row md:mt-3 w-full">
                    <div className="flex-grow md:pr-2">
                      <div className="text-left">
                        <p className="text-[16px]">Name</p>
                        <div className="flex items-left pt-3">
                          <input
                            className="h-11 w-full rounded-full text-indent-16 pl-4"
                            style={{ backgroundColor: "#29292c", outline: "none" }}
                            type="text"
                            placeholder="NTF Contract"
                            onChange={(e) => setNameData(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow md:pl-2 mt-3 md:mt-0">
                      <div className="text-left">
                        <p className="text-[16px]">Price</p>
                        <div className="flex items-left pt-3">
                          <input
                            className="h-11 w-full rounded-full text-indent-16 pl-4"
                            style={{ backgroundColor: "#29292c", outline: "none" }}
                            type="number"
                            placeholder="Enter amount in USDT"
                            onChange={(e) => setPriceData(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="flex w-full text-white px-6 pt-2 justify-center">
                {/* Search area */}
                <div className="block h-full  w-full border-solid border-gray-700">
                  <div className="text-[16px]">Contract</div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-3 md:gap-4 text-center">
                    {contractList && contractList.map((oneCtrct, index) => (
                      <button className={`py-2 px-6 text-white font-size-14 rounded-full md:items-center hover:bg-blue-700 hover:bg-opacity-10 ${oneCtrct.title === contractData ? 'bg-blue-700 bg-opacity-10' : 'bg-[#2c2c2e]'} `} onClick={() => { setContractData(oneCtrct.title) }} key={index}>
                        {oneCtrct.title}
                      </button>
                    ))
                    }

                  </div>



                  <div className=" justify-between mt-5">
                    <div className="text-[16px] mb-4 flex-grow">Description</div>
                    <textarea id="description" rows={3} onChange={(e) => setDescriptionData(e.target.value)} className="  block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="This smart contract can..."></textarea>
                  </div>

                  <div className="pt-10 mt-2 z-0">
                    {/* <textarea id="contents" rows={20} onChange={(e) => setCodeData(e.target.value)} className=" block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 resize-none"  placeholder=""></textarea> */}
                    <Editor

                      height="50vh"
                      theme="vs-dark"
                      language="sol"
                      defaultLanguage="solidity"
                      defaultValue=""
                      value={sourceCode}
                      onMount={handleEditorDidMount}
                      options={{
                        autoIndent: 'full',
                        contextmenu: true,
                        fontFamily: 'monospace',
                        fontSize: 16,
                        lineHeight: 20,
                        wordWrap: 'on',
                        cursorStyle: 'block',
                        hideCursorInOverviewRuler: true,
                        matchBrackets: 'always',
                        minimap: {
                          enabled: true,
                        },
                        scrollbar: {
                          horizontalSliderSize: 4,
                          verticalSliderSize: 18,
                        },
                        selectOnLineNumbers: true,
                        roundedSelection: false,
                        readOnly: isReadOnly,
                        automaticLayout: true,
                      }}
                      onChange={

                        (newValue: any) =>
                          setCodeData(newValue)

                      }
                    />

                  </div>
                  <div className="flex pt-8 flex-grow">
                    <button
                      type="button"
                      style={{ background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)" }}
                      className="py-2 px-6 pt rounded-full font-size-16 text-white flex-grow"
                      onClick={handleSave}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default SellContract;
