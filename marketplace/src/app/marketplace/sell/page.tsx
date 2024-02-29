'use client';

import React , { useState, useRef }from "react";
import { useToast } from "@/components/ui/use-toast";
import Editor, { Monaco } from "@monaco-editor/react";

const SellContract = () => {

  const [nameData, setNameData] = useState('');
  const [descriptionData, setDescriptionData] = useState('');
  const [codeData, setCodeData] = useState('');
  const [priceData, setPriceData] = useState('');
  const [contractData, setContractData] = useState('');
  const [addressData, setAddressData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const editorRef = useRef(null);

  const { toast } = useToast()

  // const getContracts = async () => {
  //   try {
  //     const contracts = await prisma.sellContract.findMany();
  //     console.log('contracts: ', contracts);
  //     return contracts;
  //   } catch (error) {
  //     console.error("Getting user error: ", error.message);
  //   }
  // };

  // getContracts();


  const handleSave = async () => {
    if (!nameData || !descriptionData || !codeData || !priceData || !contractData) {
      toast({

        title: 'Validation Error',

      });
      alert('error')
      return;
    }
    setShowModal(true)
    const param = JSON.stringify( {
      data: {
        name: nameData,
        price: priceData,
        contract: contractData,
        description: descriptionData,
        code: codeData,
        address:addressData
      }
    });
    
    const res = await fetch('/api/marketplace/sell', {
      method: 'POST',
      body: param,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if(res.status === 200)
    {
      alert("Success!")
    }
    console.log( 'response wil :',res)
  }

  const contractList = ['ERC20', 'ERC21', 'ERC404', 'ERC721', 'IERC20', 'ERC165', 'Token', 'NFT']

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    console.log("hhh", editor, monaco);
    editorRef.current = editor;
  }

  return (
    <div className=" items-center justify-center bg-[url(/backgrounds/token-result.svg)] bg-cover bg-center min-h-screen mt-[170px] mx-auto">
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
                        type="text"
                        placeholder="Enter amount in USDT"
                        onChange={(e) => setPriceData(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-grow md:pl-2 mt-3 md:mt-0">
                  <div className="text-left">
                    <p className="text-[16px]">Address</p>
                    <div className="flex items-left pt-3">
                      <input
                        className="h-11 w-full rounded-full text-indent-16 pl-4"
                        style={{ backgroundColor: "#29292c", outline: "none" }}
                        type="text"
                        placeholder="Enter wallet address"
                        onChange={(e) => setAddressData(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full text-white px-6 pt-2 justify-center">
            {/* Search area */}
            <div className="block h-full border-solid border-gray-700">
              <div className="text-[16px]">Contract</div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-3 md:gap-4 text-center">
                {contractList.map((one, index) => (
                  <button className="py-2 px-6 text-white font-size-14 rounded-full md:items-center" style={{ backgroundColor: "#2c2c2e" }} onClick={() => { setContractData(one) }} key={index}>
                    {one}
                  </button>
                ))}

              </div>

              <div className=" justify-between mt-5">
                <div className="text-[16px] mb-4 flex-grow">Description</div>
                <textarea id="description" rows={3} onChange={(e) => setDescriptionData(e.target.value)} className="  block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" style={{ "resize": "none" }} placeholder="This smart contract can..."></textarea>
              </div>
              <div className="pt-10 mt-2">
                {/* <textarea id="contents" rows={20} onChange={(e) => setCodeData(e.target.value)} className=" block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" style={{ "resize": "none" }} placeholder=""></textarea> */}
                <Editor
                  height="50vh"
                  defaultLanguage="sol"
                  defaultValue="// some comment"
                  onMount={handleEditorDidMount}
                  theme='vs-dark'
                  options={{
                      autoIndent: 'full',
                      contextmenu: true,
                      fontFamily: 'monospace',
                      fontSize: 13,
                      lineHeight: 24,
                      wordWrap: 'on',
                      cursorStyle: 'block',
                      hideCursorInOverviewRuler: true,
                      matchBrackets: 'always',
                      minimap: {
                        enabled: false,
                      },
                      scrollbar: {
                        horizontalSliderSize: 4,
                        verticalSliderSize: 18,
                      },
                      selectOnLineNumbers: true,
                      roundedSelection: false,
                      automaticLayout: true,
                    }}

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

  );
};

export default SellContract;
